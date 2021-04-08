import React from "react"
import Carousel from "react-material-ui-carousel"

import { Column, Row, Title } from "../../styles"
import Sscm from "../../assets/img_our_partners/sscm.jpg"
import { Container } from "./styles"

const OurTeam: React.FC = () => {
    function CardCreate(img: string) {
        return (
            <div className="overlay">
                <img src={img} alt="" width="260" />
                {/* <Text>{name}</Text> */}
            </div>
        )
    }

    return (
        <Container>
            <Column alignItems="center">
                <Title fontSize="2.2rem">Nossos Parceiros</Title>
                <Carousel className="slideFull" animation="slide">
                    <Row justifyContent="center">{CardCreate(Sscm)}</Row>
                </Carousel>
            </Column>
        </Container>
    )
}

export default OurTeam
