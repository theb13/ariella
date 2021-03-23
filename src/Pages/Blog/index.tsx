import { Button } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import Loader from "../../Components/Loader"
import PostCard from "../../Components/PostCard"
import { Post, PropsModalBLog } from "../../helpers/types"
import { getPosts } from "../../Services/api"
import { Row } from "../../styles"
import ModalView from "./ModalView"

import { Container } from "./styles"

const Blog: React.FC = () => {
	const [open, setOpen] = React.useState(false)
	const [modalData, setModalData] = React.useState<PropsModalBLog>()

	const [loading, setLoading] = useState(true)
	const [posts, setPosts] = useState([])
	const [offset, setOffset] = useState<number>(1)

	const handleOpen = (item: PropsModalBLog) => {
		setModalData(item)
		setOpen(true)
	}


	useEffect(() => {
		setLoading(true)
		getPosts(offset)
			.then((values: any) => {
				const data = values.concat(posts)
				setPosts(data)
			})
			.catch((err) => {
				console.log(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [offset])

	function renderPosts() {
		if (posts.length < 1)
			return null
		return posts.map((post: Post, index) => {
			return (
				<PostCard key={post.date + post.id}
					title={post.title.rendered}
					img={post.jetpack_featured_media_url}
					handleOpen={handleOpen}
					body={post.content.rendered}
				/>
			)
		})
	}


	return (
		<Container>
			<h1>Blog</h1>
			<Loader loading={loading} />
			<Row flexWrap justifyContent='space-around'>
				{renderPosts()}
			</Row>
			{
				posts.length > 0
					?
					(<Row className='borderTop' alignItems='center' justifyContent='center'>
						<Button variant="outlined" color="primary"
							onClick={() => (setOffset(offset + 1))}
						>
							Ver mais...
						</Button>
					</Row>
					)
					:
					null
			}
			{
				modalData?.title
					? (<ModalView open={open} setOpen={setOpen} modalData={modalData} />)
					: (null)
			}
		</Container>
	)
}

export default Blog
