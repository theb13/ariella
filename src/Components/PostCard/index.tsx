import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import VisibilityIcon from "@material-ui/icons/Visibility"
import styled from "styled-components"
import { Row, StyledCard, Text } from "../../styles"

const useStyles = makeStyles({
    root: {
        width: 345,
        margin: 20,
        flexGrow: 1,

        height: 330,
    },
    media: {
        height: 260,
        overflow: "hidden",
    },
})

const StyledText = styled(Typography)`
    overflow: hidden;
    text-overflow: ellipsis;
    color: #111;
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
`
interface Props {
    title: string
    img: string
    // eslint-disable-next-line react/require-default-props
    views?: number
    to: string
}

const PostCard: React.FC<Props> = ({ title, img, views, to }: Props) => {
    const classes = useStyles()
    return (
        <Link to={to}>
            <StyledCard className={classes.root}>
                {views ? (
                    <Row justifyContent="center" className="post-views">
                        <Text>{views}</Text>
                        <VisibilityIcon
                            style={{ color: "#5c8599", marginLeft: 5 }}
                        />
                    </Row>
                ) : null}

                <CardActionArea>
                    <CardMedia className={classes.media} image={img} />
                    <CardContent>
                        <StyledText
                            gutterBottom
                            variant="h2"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        </Link>
    )
}

export default PostCard
