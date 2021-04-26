import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import { StyledCard } from "../../styles"

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
}

const PostCard: React.FC<Props> = ({ title, img, id }: Props) => {
    const classes = useStyles()
    // const data = { title, body }

    return (
        <Link to={`blog/${id}`}>
            <StyledCard className={classes.root}>
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
