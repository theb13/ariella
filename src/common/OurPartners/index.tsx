import React from "react"

import { Column, Title } from "../../styles"
import { ourPartnerData } from "./data"
import Carousel from "../../Components/Carousel"

const OurTeam: React.FC = () => {
    return (
        <section>
            <Column alignItems="center">
                <Title fontSize="2.2rem">Nossos Clientes</Title>
                <Carousel>
                    {ourPartnerData.map((item) => (
                        <Column
                            justifyContent="center"
                            alignItems="center"
                            key={item.id}
                            style={{ height: 220 }}
                        >
                            <div style={{ width: 200, height: 180 }}>
                                <img
                                    src={item.img}
                                    alt="logo"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </Column>
                    ))}
                </Carousel>
            </Column>
        </section>
    )
}

export default OurTeam
