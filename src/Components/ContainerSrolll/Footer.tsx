import React from "react"
import PhoneForwardedOutlinedIcon from "@material-ui/icons/PhoneForwardedOutlined"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import FacebookIcon from "@material-ui/icons/Facebook"
import YouTubeIcon from "@material-ui/icons/YouTube"
import InstagramIcon from "@material-ui/icons/Instagram"
import { ContainerFooter } from "./styles"
import { Row, Column, Text } from "../../styles"

const Footer: React.FC = () => {
    return (
        <ContainerFooter>
            <Row justifyContent="space-between" flexWrap>
                <Row justifyContent="space-around" alignItems="center">
                    <a href="tel:+255840000000">
                        <PhoneForwardedOutlinedIcon color="primary" />
                        <p>(+255) 84 000 0000</p>
                    </a>
                    <a href="mailto:info@alphacapital.com">
                        <MailOutlineIcon color="primary" />{" "}
                        <p>info@ariellaboats.com</p>
                    </a>
                </Row>
                <Row justifyContent="space-around">
                    <a
                        target="blank"
                        href="https://www.facebook.com/Ariella-Boats-105606138175180"
                    >
                        <FacebookIcon style={{ color: "#007BFF" }} />
                    </a>
                    <a
                        target="blank"
                        href="https://www.youtube.com/channel/UCnZHU_FI3CQx3B1bg2ttscg/videos"
                    >
                        <YouTubeIcon style={{ color: "#FF0000" }} />
                    </a>
                    <a target="blank" href="mailto:info@alphacapital.com">
                        <InstagramIcon style={{ color: "#D62976" }} />
                    </a>
                </Row>
            </Row>
            <Column>
                <Row justifyContent="center">
                    <Text color="#FFF">
                        © 2020 Todos Direitos Reservados a AriellaBoats.
                    </Text>
                </Row>
            </Column>
        </ContainerFooter>
    )
}

export default Footer
