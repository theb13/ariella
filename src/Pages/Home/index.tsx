import { Container } from "@material-ui/core"
import React from "react"
import OurPartners from "../../common/OurPartners"
import OurServices from "../../common/OurServices"
import OurTeam from "../../common/OurTeam"
import Overview from "../../common/Overview"
// import Banner from "../../Components/Banner"
import { Padding } from "../../styles"
import HotInfo from "./HotInfo"
import SliderShow from "./SliderShow"

const Home: React.FC = () => {
    return (
        <main>
            <SliderShow />
            <Padding id="view" background>
                <Overview />
            </Padding>
            <Padding>
                <HotInfo />
            </Padding>
            <Padding background>
                <OurServices />
            </Padding>
            <Container>
                <OurTeam />
                <OurPartners />
            </Container>
        </main>
    )
}

export default Home
