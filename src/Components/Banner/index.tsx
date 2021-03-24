import React from "react"

import { Link } from "react-router-dom"
import { BannerSection } from "./styles"
import { Title } from "../../styles"

const Banner: React.FC = () => {
    return (
        <BannerSection>
            <div className="banner-box">
                <div className="title-container">
                    <Title color="#111" fontSize="3rem">
                        AriellaBoats
                    </Title>
                    <Title color="#fff" fontSize="3rem">
                        AriellaStudio
                    </Title>
                </div>
                <div className="title-container">
                    <Link to="/login">
                        <button type="button">Começar</button>
                    </Link>
                    <Link to="/about">
                        <button type="button">Saber mais</button>
                    </Link>
                </div>
            </div>

            <div className="diag-bg" />
            <span className="animated arrowDown">
                {/* <BsChevronDoubleDown size={46} /> */}
            </span>
        </BannerSection>
    )
}

export default Banner
