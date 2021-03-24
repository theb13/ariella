import React from "react"
import OurPartners from "../../common/OurPartners"
import OurServices from "../../common/OurServices"
import OurTeam from "../../common/OurTeam"
import Overview from "../../common/Overview"
import Banner from "../../Components/Banner"
import { Padding } from "../../styles"
import SliderShow from "./SliderShow"

import { Container } from "./styles"

const Home: React.FC = () => {
	return (
		<Container>
			{/* <SliderShow /> */}
			<Banner />
			<Padding background>
				<Overview />
			</Padding>
			<OurTeam />
			<Padding background>
				<OurServices />
			</Padding>
			<OurPartners />
		</Container>
	)
}

export default Home
