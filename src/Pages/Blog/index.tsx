import { Button, Container } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
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
                    key={`${post.date}-${Math.random() * 30}`}
                    title={post.title.rendered}
                    img={post.featured_media_src_url}
                    id={post.id}
                    // handleOpen={handleOpen}
                    // body={post.content.rendered}
                />
            )
        })
    }
    function renderYoutube() {
        if (playList.length < 1) return null
        return playList.map(({ id, snippet }: any) => {
            const { resourceId = {} } = snippet
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
        <Container style={{ marginTop: 20 }}>
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
        </Container>
    )
}

export default Blog
