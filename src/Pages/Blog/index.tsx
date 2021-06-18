import { Button, Container } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import Loader from "../../Components/Loader"
import PostCard from "../../Components/PostCard"
import { useApiContext } from "../../Context/ApiContext"
import { PostGroup } from "../../helpers/types"
import { getPosts, getYoutubeVideos } from "../../Services/api"
import { Row, Title } from "../../styles"

const Blog: React.FC = () => {
    const { postList, getPostList } = useApiContext()
    const one = 1
    const [loading, setLoading] = useState(true)
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
        getPosts(1)
            .then((values: any) => {
                getPostList(values)
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
            .finally(() => {})
    }, [offset])

    function renderPosts() {
        if (postList.length < 1) return null
        return postList.map((post: PostGroup) => {
            return (
                <PostCard
                    key={`${post.id}-${Math.random()}`}
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
                    key={`${videoId}-${Math.random()}`}
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

            {postList.length > 0 ? (
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
