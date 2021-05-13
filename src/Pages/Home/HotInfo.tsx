import React from "react"
import ReactPlayer from "react-player"
import ShareButtons from "../../Components/ShareButtons"

import { Column, Row, Text, Title } from "../../styles"

// import { Container } from './styles';

const HotInfo: React.FC = () => {
    return (
        <Row justifyContent="center" alignItems="start" flexWrap>
            <ReactPlayer
                controls
                style={{
                    maxWidth: "300px",
                    maxHeight: "200px",
                    marginRight: "40px",
                }}
                url="https://www.youtube.com/watch?v=2qYvFxvyvKY"
            />
            <Column style={{ maxWidth: "400px", marginTop: "20px" }}>
                <Title fontSize="1.2rem">
                    Precisa de um parceiro para realização de conferências
                    online?
                </Title>
                <Text>
                    A Ariella é o seu parceiro ideal para realização de
                    conferências online.Não deixe que a Covid-19 prejudique o
                    curso das suas actividades.
                </Text>
                <ShareButtons
                    title=" Precisa de um parceiro para realização de conferências
                    online?"
                    url="https://www.youtube.com/watch?v=2qYvFxvyvKY"
                    hashtag="#AriellaBoats #AriellaStudio"
                />
            </Column>
        </Row>
    )
}

export default HotInfo
