import { Button, Container } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import Loader from "../../Components/Loader"
import PostCard from "../../Components/PostCard"
import { Post, PropsModalBLog } from "../../helpers/types"
import { getPosts, getYoutubeVideos } from "../../Services/api"
import { Row, Title } from "../../styles"
import ModalView from "./ModalView"

// import { Container } from "./styles"

const Blog: React.FC = () => {
    const [open, setOpen] = React.useState(false)
    const [modalData, setModalData] = React.useState<PropsModalBLog>()
    const one = 1
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [playList, setPlaylist] = useState([])
    const [offset, setOffset] = useState<number>(1)

    const handleOpen = (item: PropsModalBLog) => {
        setModalData(item)
        setOpen(true)
    }
    useEffect(() => {
        setLoading(true)
        getYoutubeVideos()
            .then((values: any) => {
                setPlaylist(values.items)
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .catch((err) => {
                // console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [one])
    useEffect(() => {
        setLoading(true)
        getPosts(offset)
            .then((values: any) => {
                const data = values.concat(posts)
                setPosts(data)
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .catch((err) => {
                // console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [offset])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function renderPosts() {
        if (posts.length < 1) return null
        return posts.map((post: Post) => {
            return (
                <PostCard
                    key={post.date + post.id}
                    title={post.title.rendered}
                    img={post.jetpack_featured_media_url}
                    handleOpen={handleOpen}
                    body={post.content.rendered}
                />
            )
        })
    }
    function renderYoutube() {
        if (playList.length < 1) return null
        return playList.map(({ id, snippet }: any) => {
            const { resourceId = {} } = snippet
            // const { medium } = thumbnails
            return (
                <div key={id}>
                    <ReactPlayer
                        controls
                        style={{
                            maxWidth: "300px",
                            maxHeight: "200px",
                            margin: "10px",
                        }}
                        url={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                    />
                </div>
            )
        })
    }
    return (
        <Container>
            <h1>Noticias</h1>
            <Loader loading={loading} />
            <Row flexWrap justifyContent="space-around">
                {renderPosts()}
            </Row>

            {posts.length > 0 ? (
                <Row
                    className="borderTop"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setOffset(offset + 1)}
                    >
                        Ver mais...
                    </Button>
                </Row>
            ) : null}
            <Title>Acompanhe o nosso canal</Title>
            <Row flexWrap justifyContent="space-between">
                {renderYoutube()}
            </Row>
            {modalData?.title ? (
                <ModalView
                    open={open}
                    setOpen={setOpen}
                    modalData={modalData}
                />
            ) : null}
        </Container>
    )
}

export default Blog
