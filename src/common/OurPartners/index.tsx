import React from "react"
import Carousel from "react-material-ui-carousel"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import styled from "styled-components"
import Typography from "@material-ui/core/Typography"
import { Column, Title, Row } from "../../styles"

import { Container } from "./styles"
import { OurTeamProps, ourTeamData as info } from "./data"

const useStyles = makeStyles({
    root: {
        margin: 10,
        flexGrow: 1,
        minHeight: 260,
    },
    media: {
        height: 260,
    },
})

const OurTeam: React.FC = () => {
    const classes = useStyles()

    const StyledCard = styled(Card)`
        position: relative;
        color: #fff;
        .card-content {
            display: none;
            position: absolute;
            top: 40%;
            left: 10%;
            z-index: 2;
        }

        :hover {
            .card-content {
                display: block;
            }
            ::before {
                width: 100%;
                height: 100%;
            }
        }

        ::before {
            display: block;
            position: absolute;
            z-index: 1;
            top: 0px;
            right: 0px;
            content: "";
            width: 0%;
            height: 0%;
            background-color: rgb(22, 75, 148, 0.8);
            transition: all 500ms ease;
            -moz-transition: all 500ms ease;
            -webkit-transition: all 500ms ease;
            -ms-transition: all 500ms ease;
            -o-transition: all 500ms ease;
        }
    `

    function CardCreate(data: OurTeamProps) {
        const { img, name } = data
        return (
            <StyledCard className={`${classes.root} overlay`}>
                <CardActionArea>
                    <CardMedia
                        className={`${classes.media} media`}
                        // title={title + ''}
                    >
                        <img src={img} alt="" width="260" />
                    </CardMedia>
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="h3">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        )
    }

    function renderCard(min: number, max: number) {
        return info.map((data: OurTeamProps, index) => {
            if (data.id >= min && data.id <= max)
                return <CardCreate key={`${index + data.office}`} {...data} />
            return null
        })
    }

    function Item({ min, max }: any) {
        return <Row className="row">{renderCard(min, max)}</Row>
    }

    return (
        <Container>
            <Column alignItems="center">
                <Title fontSize="2.2rem">Nossos Parceiros</Title>
                <Carousel className="slideFull" animation="slide">
                    <Item min={1} max={4} />
                    <Item min={5} max={8} />
                </Carousel>
            </Column>
        </Container>
    )
}

export default OurTeam
