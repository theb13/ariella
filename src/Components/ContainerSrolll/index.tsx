import React from "react"
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Zoom from "@material-ui/core/Zoom"
import AppMenu from "./AppMenu"
import Footer from "./Footer"

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: "fixed",
			bottom: theme.spacing(2),
			right: theme.spacing(2),
		},
		appBar: {
			backgroundColor: "#000",
			padding: 10,
			// marginBottom:20,
		}
	}),
)

function ScrollTop(props: Props) {
	const { children, window } = props
	const classes = useStyles()
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	})

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
			"#back-to-top-anchor",
		)

		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" })
		}
	}

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	)
}

function BackToTop(props: Props) {
	const classes = useStyles()
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar className={classes.appBar}>
				<AppMenu />
			</AppBar>
			<Toolbar id="back-to-top-anchor" />
			<div>
				{props.children}
				{/* <MessengerCustomerChat
          pageId={process.env.REACT_APP_PAGE_ID}
          appId={process.env.REACT_APP_APP_ID}
          language="pt_PT"
          themeColor="#ffff00"
        /> */}
			</div>
			<Footer />
			<ScrollTop {...props}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</React.Fragment>
	)
}



// import { Container } from './styles';

const ContainerSrolll: React.FC<Props> = (props) => {
	return <BackToTop {...props} />
}

export default ContainerSrolll