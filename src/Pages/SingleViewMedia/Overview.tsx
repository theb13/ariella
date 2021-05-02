import React from "react"
import styled from "styled-components"
import BreadCrumb from "../../Components/BreadCrumb"
import { Column, Row, Title, Text } from "../../styles"

const Img = styled.img`
    width: 300px;
    border-radius: 20px;
    box-shadow: 1px 1px 2px #164b94;
    height: auto;
`
const StyledDiv = styled.div`
    position: relative;
    width: 300px;
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
interface Props {
    data: any
    id: string
}
const Overview: React.FC<Props> = ({ data, id }: Props) => {
    return (
        <Column style={{ marginTop: 30, marginBottom: 30 }}>
            <Row justifyContent="center">
                <span />
                <Title fontSize="2rem">ARIELLA BOATS & SERVICES S.A.</Title>
            </Row>
            <BreadCrumb
                text2={id}
                text1="Ariella Studio"
                link="/ariellaStudio"
            />
            <Row justifyContent="center" style={{ flexWrap: "wrap-reverse" }}>
                <Column style={{ maxWidth: "600px" }}>
                    <Title fontSize="1.8rem">{data.title}</Title>
                    <Text>{data.text}</Text>
                    <br />
                    <Title fontSize="1.1rem"> Contacto</Title>
                    <a href="mailto:ariellaboats@gmail.com">
                        <Text> ariellaboats@gmail.com</Text>
                    </a>
                    <a href="tel:+255877745372">
                        <Text>+258 87 774 5372</Text>
                    </a>
                    <a href="tel:+255842376204">
                        <Text>+258 84 237 6204</Text>
                    </a>
                    <br />
                </Column>
                <StyledDiv
                    className="overview-img "
                    style={{ marginBottom: "20px" }}
                >
                    <Img src={data.img} alt="" />
                </StyledDiv>
            </Row>
        </Column>
    )
}

export default Overview
