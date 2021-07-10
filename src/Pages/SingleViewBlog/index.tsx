import { Container, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import VisibilityIcon from "@material-ui/icons/Visibility"
import { Column, Row, Text, Title } from "../../styles"
import { getSinglePost } from "../../Services/api"
import { Post } from "../../helpers/types"
import Loader from "../../Components/Loader"
import BreadCrumb from "../../Components/BreadCrumb"
import ShareButtons from "../../Components/ShareButtons"

const PostViews = styled(Row)`
    background-color: #5c8599;
    border-radius: 10px;
    width: 60px;
`
const Img = styled.img`
    width: 100%;
    border-radius: 20px;
    box-shadow: 1px 1px 2px #164b94;
    height: auto;
`
const StyledRow = styled(Row)`
    display: flex;
    flex-direction: column;
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
            flex: 1;
            margin: 10px 0;
        }
    }
    a {
        color: #007bff;
        text-decoration: underline;
    }
    p {
        margin: 10px !important;
    }
    img {
        max-width: 100% !important;
        height: auto;
    }
    .wp-caption.alignnone {
        width: 100% !important;
    }
    .wp-caption.aligncenter {
        width: 100% !important;
    }
    .MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom {
        width: 100% !important;
    }
    /* padding: 40px 40px; */
`
const StyledDivP = styled(Row)`
    position: relative;
    width: 100%;
    margin: 15px 5px;
    ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background: #007bff;
    }
`
const SingleBlogView: React.FC = () => {
    const { id } = useParams() as any
    const [data, setData] = useState<Post>()
    const [loading, setLoading] = useState(true)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(false)
    const x = 0

    useEffect(() => {
        setLoading(true)
        getSinglePost(id)
            .then((values: any) => {
                setData(values)
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .catch((err) => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [x])
    return (
        <Container>
            <Loader loading={loading} />
            <Column style={{ marginTop: 30 }}>
                <span style={{ marginTop: 20 }} />
                <BreadCrumb
                    text2={`notícia ${id}`}
                    text1="Notícias"
                    link="/blog"
                />
                <Row justifyContent="flex-end">
                    <PostViews justifyContent="center" className="post-views">
                        <Text color="#fff">{data?.views}</Text>
                        <VisibilityIcon
                            style={{ color: "#fff", marginLeft: 5 }}
                        />
                    </PostViews>
                </Row>
                <Column alignItems="center">
                    <StyledDivP justifyContent="center">
                        <Title
                            fontSize="1.8rem"
                            color="#111"
                            style={{
                                border: "2px solid #007bff",
                                padding: 5,
                                borderRadius: 20,
                                background: "#fff",
                                zIndex: 5,
                            }}
                        >
                            {data?.title.rendered}
                        </Title>
                    </StyledDivP>
                    <Row style={{ margin: "20px", width: "80%" }}>
                        <Img src={data?.featured_media_src_url} alt="" />
                    </Row>
                </Column>
                <StyledRow>
                    <Typography
                        gutterBottom
                        component="p"
                        style={{
                            color: "#111",
                            fontSize: "1rem",
                            marginTop: "15px",
                        }}
                        dangerouslySetInnerHTML={{
                            __html: data?.content.rendered,
                        }}
                    />
                </StyledRow>
                <ShareButtons
                    hashtag="#AriellaBoats #AriellaStudio"
                    title={data?.title.rendered || "Noticias"}
                    url={window.location.href}
                />
            </Column>
        </Container>
    )
}

export default SingleBlogView
