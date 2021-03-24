import React from "react"
import Carousel from "react-material-ui-carousel"
import { makeStyles } from "@material-ui/core/styles"

import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import { Button } from "@material-ui/core"
import { Container } from "./styles"
import { OurTeamProps, ourTeamData as info } from "./data"
import { Column, Title, Row, StyledCard } from "../../styles"
import ModalView from "./ModalView"

const useStyles = makeStyles({
    root: {
        width: 300,
        minHeight: 300,
        backgroundColor: "#F8F8F8",
    },
    media: {
        height: 260,
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
                        <img src={img} alt="" width="300" />
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

    function renderCard(min: number, max: number) {
        return info.map((data: OurTeamProps) => {
            if (data.id >= min && data.id <= max)
                return <CardCreate {...data} />
            return null
        })
    }

    function Item({ min, max }: any) {
        return (
            <Row className="row" justifyContent="space-around">
                {renderCard(min, max)}
            </Row>
        )
    }

    return (
        <Container>
            <Column alignItems="center">
                <Title fontSize="2.2rem">Nossa Equipe</Title>
                <Carousel className="slideFull" animation="slide">
                    <Item min={1} max={3} />
                    <Item min={4} max={6} />
                    <Item min={7} max={9} />
                </Carousel>
            </Column>
            {person ? (
                <ModalView open={open} setOpen={setOpen} person={person} />
            ) : null}
        </Container>
    )
}

export default OurTeam
