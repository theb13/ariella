import React from 'react';
import { Column, Row, Title, Text } from '../../styles';

// import { Container } from './styles';

const Overview: React.FC = () => {
    return (
        <Row className="">
            <Column>
                <Title>{`ARIELLA BOATS & SERVICES S.A.`}</Title>
                <Text>É uma das poucas firmas moçambicanas que
                conta com uma excelente equipa de profissionais
                focalizada em áreas de desenvolvimento
                organizacional e assistência técnica especializada
            </Text>
            </Column>
            <Column></Column>
        </Row>)
}

export default Overview;