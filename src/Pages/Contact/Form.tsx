import React from "react"
import styled from "styled-components"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import EmailIcon from "@material-ui/icons/Email"
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded"
import { Container } from "./styles"
import { Column, Row, Text, Title } from "../../styles"


const Input = styled.input`
    width: 100%;
    
    padding: 12px 15px;
    margin: 10px 0px;
    
    font-size: 16px;
    font-weight:400;
    font-family: 'Helvetica Neue Pro';
    
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
    font-weight:400;
    font-family: 'Helvetica Neue Pro';
    
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
    background: none;

`
const Card = styled.div`
    
    display: flex;
    
    > .body{
        width:250px;
        margin-left:20px;
        h5{ 
            font-weight:400;
            font-size:1.2rem;
            color:#17252c;
            border-bottom: 2px solid #e7e7e7;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }
    }
    
    
`


const Form: React.FC = () => {
	return (<>
		<Container>
			<Row>
				<Title>Contacte-nos</Title>
			</Row>
			<Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quo facere ex, iusto sapiente pariatur similique quasi veniam alias culpa magni obcaecati commodi recusandae dolores sunt, nemo numquam consectetur quibusdam.
			</Text>

			<Row justifyContent='center' alignItems='start' flexWrap>
				<Column className='width'>
					<Card >
						<LocationOnIcon style={{color:"#164B94"}}/>
						<div className="body">
							<h5>Endereço</h5>
							<Text>
                Av. Agostinho Neto nº 1528 R/C,
                esquina com Olof Palme.
								<br/>
                Maputo – Moçambique.
							</Text>
						</div>
					</Card>

					<Card >
						<PhoneForwardedIcon style={{color:"#164B94"}}/>
						<div className="body">
							<h5>Telefone</h5>
							<Text>
                +258 87 7745 372
								<br/>
                +258 84 237 6204
								<br/>
                +258 84 237 5841
								<br/>
                +258 82 094 12 88
							</Text>
						</div>
					</Card>

					<Card >
						<EmailIcon style={{color:"#164B94"}}/>
						<div className="body">
							<h5>Email</h5>
							<Text>
                info@ariellaboats.com
								<br/>
                apoio@ariellaboats.com
								<br/>
                ariellaboats@gmail.com
							</Text>

						</div>
					</Card>

				</Column>

				<Column className='width'>
					<form action="">
						<h3>Enviar mensagem</h3>
						<Input type="text" required placeholder='Nome Completo' />
						<Input type="email" required placeholder='Email' />
						<Input type="text" required placeholder='Contacto' />
						<Input type="assunto" required placeholder='Assunto' />
						<Textarea name="" required placeholder='Mensagem' ></Textarea>
						{/* <Row className='flex-end'> <Button> Enviar</Button></Row> */}
					</form>
				</Column>

			</Row>

		</Container>

	</>
	)
}

export default Form
