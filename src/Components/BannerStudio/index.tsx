import React from "react"
import { Container as ContainerUI } from "@material-ui/core"
import { Link } from "react-router-dom"
import Logo from "../../assets/img/logoStudio.png"
import Casamento from "../../assets/img_ariella_studio/casamento.jpg"
import Mel from "../../assets/img_ariella_studio/mel.jpg"
import Namoro from "../../assets/img_ariella_studio/namoro.jpg"
import { Column, Row, Title, Text } from "../../styles"

import { Card, Container } from "./styles"

function createCards(text: string, Img: string, id: string) {
    return (
        <Link to={id}>
            <Card>
                <img src={Img} alt="" width="200" />
                <div className="img-description">
                    <Text color="#ccc">{text}</Text>
                </div>
            </Card>
        </Link>
    )
}

const BannerStudio: React.FC = () => {
    return (
        <Container>
            <Column justifyContent="center" style={{ height: "100%" }}>
                <ContainerUI style={{ marginBottom: "40px" }}>
                    <Row
                        className="logo-container"
                        justifyContent="space-between"
                        style={{ flexWrap: "wrap-reverse" }}
                    >
                        <Column style={{ marginTop: "20px" }}>
                            <Title color="#fff" fontSize="2.1rem">
                                Um Click, uma história!
                            </Title>
                            <Title color="#fff">
                                Marque a tua sessão! e conte-nos a tua história
                            </Title>
                            <a href="tel:+255877745372">
                                <Title fontSize="1.1rem">877745372</Title>
                            </a>
                        </Column>
                        <img src={Logo} alt="" width="300" />
                    </Row>
                </ContainerUI>
                <Row justifyContent="center" flexWrap>
                    {createCards("Publicidades", Casamento, "publicidade")}
                    {createCards("Photoshoots", Mel, "photoshoot")}
                    {createCards("Eventos socias", Namoro, "eventos")}
                </Row>
            </Column>
        </Container>
    )
}

export default BannerStudio
