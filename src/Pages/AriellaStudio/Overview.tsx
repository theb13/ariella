import React from 'react';
import { Column, Row, Title, Text } from '../../styles';
import Logo from '../../assets/img/logo2.png'
import styled from 'styled-components';
const Img = styled.img`
    width:300px;
    border-radius: 20px;
`
const StyledDiv = styled.div`
    position :relative;
    width: 350px;
    margin-left:5px;
    z-index:2;
    ::before{
        z-index:-1;
        top:20px;
        left:20px;
        position:absolute;
        content:'';
        width: 100%;
        height: 100%;
        background:#164B94;
        border-bottom-right-radius: 20px;
        /* border-radius: 20px; */
        
    }
`


const Overview: React.FC = () => {
    return (
        <Column >
            <Row justifyContent='center' >
                <Title fontSize="2.2rem">{`ARIELLA STUDIO`}</Title>
            </Row>
            <Row  >
                <Column>
                    <Title fontSize='2rem'>Visão geral da empresa</Title>
                    <Text>A ARIELLA BOATS é uma das poucas firmas moçambicanas que
                    conta com uma excelente equipa de profissionais
                    focalizada em áreas de desenvolvimento
                    organizacional e assistência técnica especializada
                </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod voluptate harum unde. Sed aliquid iure est repellendus. Fugit beatae magnam sapiente facere amet, neque accusamus reprehenderit perspiciatis similique explicabo.
                </Text>
                </Column>
                <StyledDiv className="overview-img">
                    <Img src={Logo} alt="" />
                </StyledDiv>
            </Row>
        </Column>

    )
}

export default Overview;