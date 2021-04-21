import React from "react"
import ReactPlayer from "react-player"
import { Column, Row, Text, Title } from "../../styles"

// import { Container } from './styles';

const HotInfo: React.FC = () => {
    return (
        <Row justifyContent="center" alignItems="start" flexWrap>
            <ReactPlayer
                style={{
                    maxWidth: "300px",
                    maxHeight: "200px",
                    marginRight: "40px",
                }}
                url="https://www.youtube.com/watch?v=2qYvFxvyvKY"
            />
            <Column style={{ maxWidth: "400px" }}>
                <Title fontSize="1.2rem">
                    Precisa de um parceiro para realização de conferências
                    online?
                </Title>
                <Text>
                    A Ariella é o seu parceiro ideal para realização de
                    conferências online.Não deixe que a Covid-19 prejudique o
                    curso das suas actividades.
                </Text>
                {/* <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod voluptate harum unde. Sed aliquid iure est repellendus. Fugit beatae magnam sapiente facere amet, neque accusamus reprehenderit perspiciatis similique explicabo.
            </Text> */}
            </Column>
        </Row>
    )
}

export default HotInfo
