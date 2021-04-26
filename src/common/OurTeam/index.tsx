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
import ModalView from "../../Components/ModalView"

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

    function renderCard(min: number, max: number) {
        return info.map((data: OurTeamProps) => {
            if (data.id >= min && data.id <= max)
                return (
                    <CardCreate
                        key={`${data.name + Math.random() * 10}`}
                        {...data}
                    />
                )
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

    // eslint-disable-next-line consistent-return
    function displaySize() {
        // const window = Window as any
        const width = document.documentElement.clientWidth as number

        if (width > 1100) {
            return (
                <Carousel className="slideFull" animation="slide">
                    <Item min={1} max={3} />
                    <Item min={4} max={6} />
                    <Item min={7} max={9} />
                </Carousel>
            )
        }
        if (width > 775) {
            return (
                <Carousel className="slideFull" animation="slide">
                    <Item min={1} max={2} />
                    <Item min={3} max={4} />
                    <Item min={5} max={6} />
                    <Item min={7} max={8} />
                </Carousel>
            )
        }
        return (
            <Carousel className="slideFull" animation="slide">
                <Item min={1} max={1} />
                <Item min={2} max={2} />
                <Item min={3} max={3} />
                <Item min={4} max={4} />
                <Item min={5} max={5} />
                <Item min={6} max={6} />
                <Item min={7} max={7} />
                <Item min={8} max={8} />
                <Item min={9} max={9} />
            </Carousel>
        )
    }

    return (
        <Container>
            <Column alignItems="center">
                <Title fontSize="2.2rem">Nossa Equipe</Title>
                {displaySize()}
            </Column>
            {person ? (
                <ModalView open={open} setOpen={setOpen} dataModal={person} />
            ) : null}
        </Container>
    )
}

export default OurTeam
