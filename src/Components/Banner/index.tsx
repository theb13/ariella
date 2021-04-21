import React from "react"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { BannerSection } from "./styles"
import { Row, Title } from "../../styles"

const Banner: React.FC = () => {
    return (
        <BannerSection>
            <Row justifyContent="flex-end" className="row-title">
                <Title className="banner-title" color="#fff" fontSize="2rem">
                    Olá,
                    <br />
                    Bem Vindo a <br />
                    Nossa Pagina
                </Title>
            </Row>

            <div className="diag-bg" />
            <span className="animated arrowDown">
                <KeyboardArrowDownIcon style={{ fontSize: 56 }} />
            </span>
        </BannerSection>
    )
}

export default Banner
