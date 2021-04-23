import React from "react"
import { Container as ContainerUI } from "@material-ui/core"
import { Link } from "react-router-dom"
import Logo from "../../assets/img/logoStudio.png"

import { Column, Row, Title, Text } from "../../styles"

import { Card, Container } from "./styles"
import {
    OurServicesProps,
    ourServicesStudioData,
} from "../../common/OurServices/data"

function createCards() {
    return ourServicesStudioData.map((data: OurServicesProps) => {
        return (
            <Link to={`${data.id}`}>
                <Card>
                    <img src={data.img} alt="" width="200" />
                    <div className="img-description">
                        <Text color="#ccc">{data.id}</Text>
                    </div>
                </Card>
            </Link>
        )
    })
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
                                <Title fontSize="1.1rem">
                                    (+258) 87 774 5372
                                </Title>
                            </a>
                            <a href="tel:+255842376204">
                                <Title fontSize="1.1rem">
                                    (+258) 84 237 6204
                                </Title>
                            </a>
                        </Column>
                        <img src={Logo} alt="" width="300" />
                    </Row>
                </ContainerUI>
                <Row justifyContent="center" flexWrap>
                    {createCards()}
                </Row>
            </Column>
        </Container>
    )
}

export default BannerStudio
