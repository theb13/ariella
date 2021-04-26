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
                    <Column alignItems="center">
                        <PhoneForwardedOutlinedIcon
                            style={{ color: "#164B94" }}
                        />
                        <a href="tel:+255877901373">+258 87 790 1373</a>
                        <a href="tel:+255841504204">+258 84 150 4204</a>
                    </Column>
                    <Column alignItems="center">
                        <MailOutlineIcon style={{ color: "#164B94" }} />{" "}
                        <a href="mailto:info@ariellaboats.com">
                            info@ariellaboats.com
                        </a>
                        <a href="mailto:ariellaboats@gmail.com">
                            ariellaboats@gmail.com
                        </a>
                    </Column>
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
                    <a
                        target="blank"
                        href="https://www.instagram.com/ariellastudiomz/"
                    >
                        <InstagramIcon style={{ color: "#D62976" }} />
                    </a>
                </Row>
            </Row>
            <Column>
                <Row justifyContent="center">
                    <Text color="#FFF">
                        © 2020 Todos Direitos Reservados à AriellaBoats.
                    </Text>
                </Row>
            </Column>
        </ContainerFooter>
    )
}

export default Footer
