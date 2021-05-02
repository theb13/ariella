import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import { Button } from "@material-ui/core"
import { Container } from "./styles"
import { OurTeamProps, ourTeamData as info } from "./data"
import { Column, Title, StyledCard } from "../../styles"
import ModalView from "../../Components/ModalView"
import Carousel from "../../Components/Carousel"

const useStyles = makeStyles({
    root: {
        width: 280,
        minHeight: 280,
        backgroundColor: "#F8F8F8",
    },
    media: {
        height: 240,
        overflow: "hidden",
    },
})

const OurTeam: React.FC = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [person, setPerson] = React.useState<any>()

    const handleOpen = (item: any) => {
        setPerson(item)
        setOpen(true)
    }

    function CardCreate(data: OurTeamProps) {
        const { img, name, office } = data
        return (
            <StyledCard className={`${classes.root} overlay`}>
                <CardActionArea>
                    <CardMedia className={`${classes.media} media`}>
                        <img src={img} alt="" width="280" />
                    </CardMedia>
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="h3">
                            {name}
                        </Typography>
                        <Typography variant="body2" component="h4">
                            {office}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions onClick={() => handleOpen(data)}>
                    <Button size="small" color="primary">
                        Saber mais...
                    </Button>
                </CardActions>
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
                            <CardCreate
                                key={`${data.name + Math.random() * 10}`}
                                {...data}
                            />
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
