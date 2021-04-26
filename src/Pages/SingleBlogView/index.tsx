/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Column, Row, Text, Title, Separator } from "../../styles"
import { getSinglePost } from "../../Services/api"
import { Post } from "../../helpers/types"
import Loader from "../../Components/Loader"
import BreadCrumb from "../../Components/BreadCrumb"

// import { Container } from './styles';

const Img = styled.img`
    width: 100%;
    border-radius: 20px;
    box-shadow: 1px 1px 2px #164b94;
    max-height: 400px;
`
const StyledDiv = styled.div`
    position: relative;
    width: 80%;
    margin-left: 5px;
    z-index: 2;
    ::before {
        z-index: -1;
        top: 10px;
        left: 15px;
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: #164b94;
        border-radius: 20px;
    }
    @media (max-width: 720px) {
        width: 250px;
        img {
            width: 250px;
        }
    }
`
const StyledRow = styled(Row)`
    display: flex;
    flex-direction: column;
    padding: 50px 40px;
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
        color: #111;
    }
    img {
        max-width: 100% !important;
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
    @media (max-width: 1000px) {
        img {
            max-height: 350px !important;
        }
    }
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
                <Row justifyContent="center">
                    <span />
                    <Title fontSize="2rem">ARIELLA BOATS & SERVICES S.A.</Title>
                </Row>
                <BreadCrumb
                    text2={`notícia ${id}`}
                    text1="Noticias"
                    link="/blog"
                />
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
                    <StyledDiv style={{ margin: "10px" }}>
                        <Img src={data?.featured_media_src_url} alt="" />
                    </StyledDiv>
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
            </Column>
        </Container>
    )
}

export default SingleBlogView
