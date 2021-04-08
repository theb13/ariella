import React from "react"
import { Container as ContainerUI } from "@material-ui/core"
import Camera from "../../assets/img/camera1.jpg"
import Logo from "../../assets/img/logoStudio.png"
import Casamento from "../../assets/img_ariella_studio/casamento.jpg"
// import Jen from "../../assets/img_ariella_studio/jen.jpg"
import Mel from "../../assets/img_ariella_studio/mel.jpg"
import Namoro from "../../assets/img_ariella_studio/namoro.jpg"
import { Column, Row, Title, Text } from "../../styles"

import { Card, Container } from "./styles"

function createCards(text: string, Img: string) {
    return (
        <Card>
            <img src={Img} alt="" width="200" />
            <div className="img-description">
                <Text color="#fff">{text}</Text>
            </div>
        </Card>
    )
}

const BannerStudio: React.FC = () => {
    return (
        <Container img={Camera}>
            <Column justifyContent="center" style={{ height: "100%" }}>
                <ContainerUI style={{ marginBottom: "90px" }}>
                    <Row
                        justifyContent="space-between"
                        style={{ flexWrap: "wrap-reverse" }}
                    >
                        <Column>
                            <Title color="#fff" fontSize="2.1rem">
                                Um Click, uma história!
                            </Title>
                            <Title color="#fff">
                                Marque a tua sessão e conte-nos a tua história
                            </Title>
                        </Column>
                        <img src={Logo} alt="" width="300" />
                    </Row>
                </ContainerUI>
                <Row justifyContent="center">
                    {createCards("Publicidades", Casamento)}
                    {createCards("Photoshoots", Mel)}
                    {createCards("Eventos socias", Namoro)}
                    {/* {createCards("Eventos sociass")} */}
                </Row>
            </Column>
        </Container>
    )
}

export default BannerStudio
