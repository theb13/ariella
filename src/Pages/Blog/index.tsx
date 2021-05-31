import { Button, Container } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import Loader from "../../Components/Loader"
import PostCard from "../../Components/PostCard"
import { Post } from "../../helpers/types"
import { getPosts, getYoutubeVideos } from "../../Services/api"
import { Row, Title } from "../../styles"

const Blog: React.FC = () => {
    const one = 1
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [playList, setPlaylist] = useState([])
    const [offset, setOffset] = useState<number>(1)

    useEffect(() => {
        setLoading(true)
        getYoutubeVideos("")
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
                const data = posts.concat(values)
                setPosts(data)
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [offset])

    function renderPosts() {
        if (posts.length < 1) return null
        return posts.map((post: Post) => {
            return (
                <PostCard
                    key={`${post.date}-${Math.random() * 30}`}
                    title={post.title.rendered}
                    img={post.featured_media_src_url}
                    to={`blog/${post.id}`}
                    views={post.views}
                />
            )
        })
    }
    function renderYoutubeCard() {
        if (playList.length < 1) return null
        return playList.map(({ id, snippet }: any) => {
            const { title, thumbnails = {} } = snippet
            const { high } = thumbnails
            const { videoId } = id
            return (
                <PostCard
                    key={id}
                    title={title}
                    img={high.url}
                    to={`youtube/${videoId}`}
                />
            )
        })
    }

    return (
        <Container style={{ marginTop: 20 }}>
            <h1>Noticias</h1>
            <Loader loading={loading} />
            <Row flexWrap justifyContent="space-around" style={{ gap: 20 }}>
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
            <Row flexWrap justifyContent="space-between" style={{ gap: 20 }}>
                {renderYoutubeCard()}
            </Row>
        </Container>
    )
}

export default Blog
