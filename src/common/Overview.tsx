import React from "react"
import styled from "styled-components"
import { Column, Row, Title, Text } from "../styles"
import Logo from "../assets/img/logo.jpg"

const Img = styled.img`
    width: 310px;
    border-radius: 20px;
    box-shadow: 1px 1px 2px #164b94;
`
const StyledDiv = styled.div`
    position: relative;
    width: 350px;
    margin-left: 5px;
    z-index: 2;
    ::before {
        z-index: -1;
        top: 5px;
        left: 5px;
        position: absolute;
        content: "";
        width: 90%;
        height: 100%;
        background: #164b94;
        border-radius: 20px;
        /* border-radius: 20px; */
    }
`

const Overview: React.FC = () => {
    return (
        <Column>
            <Row justifyContent="center">
                <span />
                <Title fontSize="2rem">ARIELLA GROUP S.A.</Title>
            </Row>
            <Row justifyContent="center">
                <Column style={{ maxWidth: "600px" }}>
                    <Title fontSize="1.8rem">Visão geral da empresa</Title>
                    <Text>
                        Somos uma empresa moçambicana que se dedica na prestação
                        de serviços e consultorias ligadas ao desenvolvimento
                        organizacional. O fim último de toda nossa acção é
                        tornar a sua empresa ou organização uma referência no
                        que diz respeito a qualidade organizacional na sua área
                        de actuação no mercado.
                    </Text>
                </Column>
                <StyledDiv className="overview-img hiddenMobile">
                    <Img src={Logo} alt="" />
                </StyledDiv>
            </Row>
        </Column>
    )
}

export default Overview
