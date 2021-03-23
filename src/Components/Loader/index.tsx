import React from "react"
import Backdrop from "@material-ui/core/Backdrop"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

interface Props{
  loading: boolean
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: "#fff",
		},
	}),
)

const Loader: React.FC<Props> = ({loading}: Props) => {
	const classes = useStyles()
	return (
		<div>
     
			<Backdrop className={classes.backdrop} open={loading} >
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	)
}

export default Loader
