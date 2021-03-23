import React from "react"
import ServicesCard from "../../Components/ServicesCard"
import { Column, Title, Text, Row } from "../../styles"

import { ourServicesData as info,OurServicesProps } from "./data"
const OurServices: React.FC = () => {

	function renderServices() {
		return info.map((data:OurServicesProps, index) => {
			return <ServicesCard  key={index+data.title} {...data} />
		})
	}

	return (
		<Column alignItems='center'>
			<Title fontSize="2.2rem">Nossos Serviços</Title>
			<Text>Como parte da sua missão,
        a Ariella Boats & Services S.A. oferece os
        seguintes serviços:
			</Text>
			<Row flexWrap justifyContent='center'>
				{renderServices()}
			</Row>
		</Column>
	)
}

export default OurServices
