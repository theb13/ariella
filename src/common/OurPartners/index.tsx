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
                        <div key={item.id}>
                            <img
                                src={item.img}
                                alt=""
                                width="220"
                                height="150"
                            />
                        </div>
                    ))}
                </Carousel>
            </Column>
        </section>
    )
}

export default OurTeam
