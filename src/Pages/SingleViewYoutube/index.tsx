import { Container } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import ReactPlayer from "react-player"
import { Column, Row, Text, Title } from "../../styles"
import { getYoutubeVideos } from "../../Services/api"
import Loader from "../../Components/Loader"
import BreadCrumb from "../../Components/BreadCrumb"
import ShareButtons from "../../Components/ShareButtons"

const defaultValue = {
    items: {
        0: {
            snippet: {
                title: "Dia do Médico Moçambicano",
                description: `
        "Celebrou-se a 28 de Março, em todo o país, o Dia do Médico Moçambicano. Este ano a comemoração aconteceu sob o lema "Pela Dignidade da Classe Médica no Combate à Covid-19". ----// Subscreva-se no nosso canal; Siga-nos no Facebook: https://web.facebook.com/Ariella-Boats-105606138175180 WhatsApp: 87 790 1373 #Diadomédicomoçambicano #médico #pandemia #coronavirus #dignidade #combateàcovid19 #guerreirosdebatabranca #sermédico #ministériodasaúde #sistemadesaúde #nossomaiorvaloréavida #saúdeevida #humanismo #curar #pacientes #doençasmentais #hospitalcentraldemaputo #doenças #enfermidades",
        `,
                resourceId: {
                    videoId: "AbX48dr6k30",
                },
            },
        },
    },
}

const StyledColumn = styled(Column)`
    align-self: start;
    a {
        color: #111;
        font-size: 1rem;
        :hover {
            color: #4d6f80;
            text-decoration: underline;
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
    const [data, setData] = useState(defaultValue)
    const [loading, setLoading] = useState(true)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(false)
    const x = 0

    useEffect(() => {
        setLoading(true)
        getYoutubeVideos(id)
            .then((values: any) => {
                setData({ ...values })
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .catch((err) => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [x])

    const renderYoutube = () => {
        const { items } = data
        const { snippet } = items[0]
        const { title, description, resourceId } = snippet
        const { videoId } = resourceId

        return (
            <Column style={{ marginTop: 30 }}>
                <span style={{ marginTop: 20 }} />
                <BreadCrumb
                    link="/blog"
                    text1="Notícias"
                    text2={`Youtube - ${title}`}
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
                            {title}
                        </Title>
                    </StyledDivP>
                    <Row
                        style={{ margin: "20px", width: "100%" }}
                        justifyContent="center"
                    >
                        <ReactPlayer
                            controls
                            style={{
                                maxWidth: "90%",
                                height: "auto",
                            }}
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                        />
                    </Row>
                    <Column
                        style={{
                            maxWidth: "85%",
                            height: "auto",
                        }}
                    >
                        <h3 style={{ color: "#4d6f80", marginTop: 20 }}>
                            Descrição
                        </h3>
                        <Text color="inheret">
                            {description.split("----//" || "Subscreva-se")[0]}
                        </Text>
                        <h3 style={{ color: "#4d6f80", marginTop: 15 }}>
                            {" "}
                            Siga as nossas páginas
                        </h3>
                        <StyledColumn>
                            <a
                                target="blank"
                                href="https://www.youtube.com/channel/UCnZHU_FI3CQx3B1bg2ttscg/videos"
                            >
                                Youtube
                            </a>
                            <a
                                target="blank"
                                href="https://www.facebook.com/Ariella-Boats-105606138175180"
                            >
                                Facebook
                            </a>
                            <a
                                target="blank"
                                href="https://www.instagram.com/ariellastudiomz/"
                            >
                                Instagram
                            </a>
                            <a
                                target="blank"
                                href="https://twitter.com/AriellaBoats"
                            >
                                Twitter
                            </a>
                        </StyledColumn>
                    </Column>
                </Column>
                <ShareButtons
                    hashtag="#AriellaBoats #AriellaStudio"
                    title={title}
                    url={window.location.href}
                />
            </Column>
        )
    }
    return (
        <Container>
            <Loader loading={loading} />
            {renderYoutube()}
        </Container>
    )
}

export default SingleBlogView
