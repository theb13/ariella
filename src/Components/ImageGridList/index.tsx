import React from "react"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import { Media } from "../../helpers/types"
// import { tileData } from "./tileData"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: "100vw",
            height: "100%",
            transform: "translateZ(0)",
        },
    })
)
interface Props {
    medias: any
}

const ImageGridList: React.FC<Props> = ({ medias }: Props) => {
    const classes = useStyles()

    function cols(col: string) {
        if (col === "3") return 3
        if (col === "2") return 2
        return 1
    }
    function createTile(media: any) {
        return media.map((med: Media) => {
            return {
                cols: cols(med.title.rendered),
                img: med.guid.rendered,
            }
        })
    }
    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList} cols={3}>
                {createTile(medias).map((tile: any) => (
                    <GridListTile
                        key={tile.img + Math.random() * 10}
                        cols={tile.cols || 1}
                    >
                        <img src={tile.img} alt={tile.img} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default ImageGridList
