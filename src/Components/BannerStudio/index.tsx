import React from "react"
import Camera from "../../assets/img/camera1.jpg"
import Logo from "../../assets/img/logoStudio.png"
import { Column, Row, StyledCard, Text, Title } from "../../styles"
import { makeStyles } from "@material-ui/core/styles"

import { Container as ContainerUI } from "@material-ui/core"

import { Container } from "./styles"
import {  CardActionArea, CardContent, CardMedia } from "@material-ui/core"

const useStyles = makeStyles({
	root: {
		width: 200,
		Height: 200,
		backgroundColor: "#FFF",
		margin:20,
	},
	media: {
		height: 180,
		overflow: "hidden"
	},

})


function createCards( text: string) {
	const classes = useStyles()
	return (
		<StyledCard className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={`${classes.media} `}
				>
					<img src={Logo} alt="" width="200" />
				</CardMedia>
				<CardContent className='card-content'>
					<Text>
						{text}
					</Text>
				</CardContent>
			</CardActionArea>
			
		</StyledCard>
	)
}


const BannerStudio: React.FC = () => {
	return (
		<Container img={Camera}>
			<Column justifyContent='center' style={{ height: "100%" }}>
				<ContainerUI style={{marginBottom:"90px"}}>
					<Row justifyContent='space-between'>
						<Column>
							<Title color="#fff" fontSize='2.1rem'>Um Click, uma história!</Title>
							<Title color="#fff">Marque a tua sessão e conte-nos a tua história</Title>
						</Column>
						<img src={Logo} alt="" width="300" />
					</Row>
				</ContainerUI>
				<Row justifyContent='center'>
					{createCards("Casamentos")}
					{createCards("Eventos socias")}
					{createCards("Fotos pessoais")}
					{/* {createCards("Eventos sociass")} */}
				</Row>
			</Column>
		</Container>
	)
}

export default BannerStudio