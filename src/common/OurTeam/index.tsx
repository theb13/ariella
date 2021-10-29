/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"

import { Container } from "@material-ui/core"
import { OurTeamProps, ourTeamData as info } from "./data"
import { Column, Title, StyledCard } from "../../styles"
import ModalView from "../../Components/ModalView"
import Carousel from "../../Components/Carousel"

const OurTeam: React.FC = () => {
    const [open, setOpen] = React.useState(false)
    const [person, setPerson] = React.useState<any>()

    const handleOpen = (item: any) => {
        setPerson(item)
        setOpen(true)
    }

    function CardCreate(data: OurTeamProps) {
        const { img, name, office } = data
        return (
            <StyledCard
                className="overlay"
                style={{ background: "#000" }}
                onClick={() => handleOpen(data)}
            >
                <div>
                    <div className="media">
                        <img src={img} alt="" width="280" />
                    </div>
                    <div className="card-content">
                        <h3>{name}</h3>
                        <h4>{office}</h4>
                    </div>
                </div>
            </StyledCard>
        )
    }

    return (
        <Container>
            <Column alignItems="center">
                <Title fontSize="2.2rem">Nossa Equipe</Title>
                <Carousel>
                    {info.map((data: OurTeamProps) => {
                        return (
                            <Column
                                justifyContent="center"
                                alignItems="center"
                                key={`${data.name + Math.random() * 10}`}
                                style={{ width: "110%" }}
                            >
                                <CardCreate {...data} />
                            </Column>
                        )
                    })}
                </Carousel>
            </Column>
            {person ? (
                <ModalView open={open} setOpen={setOpen} dataModal={person} />
            ) : null}
        </Container>
    )
}

export default OurTeam
