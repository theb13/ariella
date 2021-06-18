import React from "react"
import styled from "styled-components"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import EmailIcon from "@material-ui/icons/Email"
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded"
import { Button } from "@material-ui/core"
import Icon from "@material-ui/core/Icon"
import { Container } from "./styles"
import { Column, Row, Text, Title } from "../../styles"

const Input = styled.input`
    width: 100%;

    padding: 12px 15px;
    margin: 10px 0px;

    font-size: 16px;
    font-weight: 400;
    font-family: "Helvetica Neue Pro";

    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
    background: none;
`

const Textarea = styled.textarea`
    width: 100%;

    padding: 12px 15px;
    margin: 10px 0px;

    font-size: 16px;
    font-weight: 400;
    font-family: "Helvetica Neue Pro";

    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
    background: none;
`
const Card = styled.div`
    display: flex;

    > .body {
        width: 250px;
        margin-left: 20px;
        h5 {
            font-weight: 400;
            font-size: 1.2rem;
            color: #17252c;
            border-bottom: 2px solid #e7e7e7;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }
        a {
            color: #5c8599;
            font-weight: 400;
        }
    }
`

const Form: React.FC = () => {
    return (
        <>
            <Container>
                <Row justifyContent="center" style={{ marginTop: "6rem" }}>
                    <Title fontSize="2rem">Contacte-nos</Title>
                </Row>
                <Row justifyContent="center">
                    <Title fontSize="1.2rem">
                        Tem alguma duvida ou questão?
                    </Title>
                </Row>
                <Row justifyContent="center">
                    <Text>
                        Tem duas opções. Pode preencher o formulário abaixo e em
                        menos de 24 horas a nossa equipa irá responder. Mas se
                        preferir resposta em tempo real, no horário normal de
                        expediente, pode entrar em contacto connosco ligando
                        para um dos números ou vir aos nossos escritórios
                        seguindo o endereço físico partilhado abaixo.
                    </Text>
                </Row>

                <Row justifyContent="center" alignItems="start" flexWrap>
                    <Column className="width">
                        <Card>
                            <LocationOnIcon style={{ color: "#164B94" }} />
                            <div className="body">
                                <h5>Endereço</h5>
                                <Text>
                                    Av. Agostinho Neto nº 1528 R/C, esquina com
                                    Olof Palme.
                                    <br />
                                    Maputo – Moçambique.
                                </Text>
                            </div>
                        </Card>

                        <Card>
                            <PhoneForwardedIcon style={{ color: "#164B94" }} />
                            <div className="body">
                                <h5>Telefone</h5>
                                <a href="tel:+255877901373">+258 87 790 1373</a>
                                <br />
                                <a href="tel:+255841504204">+258 84 150 4204</a>
                                <br />
                                <a href="tel:+255820941288">+258 82 094 1288</a>
                                <br />

                                <br />
                            </div>
                        </Card>

                        <Card>
                            <EmailIcon style={{ color: "#164B94" }} />
                            <div className="body">
                                <h5>Email</h5>
                                <a href="mailto:info@ariellaboats.com">
                                    info@ariellaboats.com
                                </a>
                                <br />
                                <a href="mailto:apoio@ariellaboats.com">
                                    apoio@ariellaboats.com
                                </a>
                                <br />
                                <a href="mailto:ariellaboats@gmail.com">
                                    ariellaboats@gmail.com
                                </a>
                                <br />
                                <br />
                            </div>
                        </Card>
                    </Column>

                    <Column className="width">
                        <form action="">
                            <h3>Enviar mensagem</h3>
                            <Input
                                type="text"
                                required
                                placeholder="Nome Completo"
                            />
                            <Input type="email" required placeholder="Email" />
                            <Input
                                type="text"
                                required
                                placeholder="Contacto"
                            />
                            <Input
                                type="assunto"
                                required
                                placeholder="Assunto"
                            />
                            <Textarea name="" required placeholder="Mensagem" />
                            <Row justifyContent="flex-end">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<Icon>send</Icon>}
                                >
                                    Enviar
                                </Button>
                            </Row>
                        </form>
                    </Column>
                </Row>
            </Container>
        </>
    )
}

export default Form
