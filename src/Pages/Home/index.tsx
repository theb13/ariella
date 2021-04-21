import React from "react"
import OurPartners from "../../common/OurPartners"
import OurServices from "../../common/OurServices"
import OurTeam from "../../common/OurTeam"
import Overview from "../../common/Overview"
import Banner from "../../Components/Banner"
import { Padding } from "../../styles"
import HotInfo from "./HotInfo"

import { Container } from "./styles"

const Home: React.FC = () => {
    return (
        <Container>
            <Banner />
            <Padding id="view" background>
                <Overview />
            </Padding>
            <Padding>
                <HotInfo />
            </Padding>
            <Padding background>
                <OurServices />
            </Padding>
            <OurTeam />
            <OurPartners />
        </Container>
    )
}

export default Home
