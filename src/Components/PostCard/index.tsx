import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import VisibilityIcon from "@material-ui/icons/Visibility"
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

interface Props {
    title: string
    img: string
    id: number
    views: number
}

const PostCard: React.FC<Props> = ({ title, img, id, views }: Props) => {
    const classes = useStyles()
    return (
        <Link to={`blog/${id}`}>
            <StyledCard className={classes.root}>
                <Row justifyContent="center" className="post-views">
                    <Text>{views}</Text>
                    <VisibilityIcon
                        style={{ color: "#5c8599", marginLeft: 5 }}
                    />
                </Row>
                <CardActionArea>
                    <CardMedia className={classes.media} image={img} />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            style={{ color: "#111", fontSize: "1rem" }}
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                    </CardContent>
                </CardActionArea>
            </StyledCard>
        </Link>
    )
}

export default PostCard
