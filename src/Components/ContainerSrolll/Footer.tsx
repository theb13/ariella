import React from "react"
import PhoneForwardedOutlinedIcon from "@material-ui/icons/PhoneForwardedOutlined"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import FacebookIcon from "@material-ui/icons/Facebook"
import YouTubeIcon from "@material-ui/icons/YouTube"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Container } from "./styles"
import { Row, Column, Text } from "../../styles"

const Footer: React.FC = () => {
	return (
		<Container>
			<Row justifyContent='space-between'>
				<Row justifyContent='space-around' alignItems='center' >
					<a href="tel:+255840000000">
						<PhoneForwardedOutlinedIcon color="primary" />(+255) 84 000 0000
					</a>
					<a href="mailto:info@alphacapital.com">
						<MailOutlineIcon color="primary" /> info@ariellaboats.com
					</a>
				</Row>
				<Row justifyContent='space-around'>
					<a href="mailto:info@alphacapital.com">
						<FacebookIcon style={{"color":"#007BFF"}} />
					</a>
					<a href="mailto:info@alphacapital.com">
						<YouTubeIcon style={{"color":"#FF0000"}} />
					</a>
					<a href="mailto:info@alphacapital.com">
						<InstagramIcon style={{"color":"#D62976"}} />
					</a>
         
				</Row>
			</Row>
			<Column>
				<Row justifyContent='center'>
					<Text color='#FFF'>
            © 2020 Todos Direitos Reservados a AriellaBoats.
					</Text>
				</Row>
			</Column>
		</Container>
	)
}

export default Footer
