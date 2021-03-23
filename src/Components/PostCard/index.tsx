import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { StyledCard } from "../../styles"

const useStyles = makeStyles({
	root: {
		width: 345,
		margin:20,
		flexGrow:1,
   
		height:330,
	},
	media: {
		height: 260,
		overflow: "hidden"
	},
})


interface Props {
  title: string;
  img: string;
  handleOpen:any
  body:string
}


const PostCard: React.FC<Props> = ({title, img,handleOpen, body}: Props) => {
	const classes = useStyles()
	const data={title, body}
	return (
		<StyledCard className={classes.root} 
			onClick={()=>handleOpen(data)}
		>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={img}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5"
						component="h2"
						style={{color:"#111", fontSize:"1rem"}}
						dangerouslySetInnerHTML={{ __html: title }}
					/>
				</CardContent>
			</CardActionArea>
			{/* <CardActions>
        <Button size="small" color="primary">
          Continuar a ler...
        </Button>
        
      </CardActions> */}
		</StyledCard>
	)
}

export default PostCard
