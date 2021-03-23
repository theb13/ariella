import React from "react"
import { Row } from "../../styles"

import MenuIcon from "@material-ui/icons/Menu"

import { makeStyles, Theme } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { Link } from "react-router-dom"
import { MediaMenu } from "./styles"
import MenuMobile from "./MenuMobile"

function a11yProps(index: any) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	}
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
	},
}))

function SimpleTabs() {
	const classes = useStyles()
	const [value, setValue] = React.useState<number>(0)

	const handleChange = (newValue: number) => {
		setValue(newValue)
	}

	return (
		<Tabs value={value} aria-label="simple tabs example">
			<Link to='/' onClick={() => (handleChange(0))} >
				<Tab label="Início" {...a11yProps(0)} />
			</Link>
			<Link to='/ariellaStudio' onClick={() => (handleChange(1))} >
				<Tab label="AriellaStudio" {...a11yProps(1)} />
			</Link>
			<Link to='/contact' onClick={() => (handleChange(2))} >
				<Tab label="Contacto" {...a11yProps(2)} />
			</Link>
			<Link to='/blog' onClick={() => (handleChange(3))} >
				<Tab label="Notícias" {...a11yProps(3)} />
			</Link>
			<Link to='/about' onClick={() => (handleChange(4))}>
				<Tab label="Sobre nós" {...a11yProps(4)} />
			</Link>
		</Tabs>
	)
}




const AppMenu: React.FC = () => {
	const [right, setRight] = React.useState<boolean>(false)

	return (
		<MediaMenu>
			<Row justifyContent='space-between'>
				<div>
					<h1 style={{ "color": "#FFF" }}>AriellaBoats</h1>
				</div>
				<MenuIcon className='menu-mobile' onClick={()=>(setRight(true))}/>
				<Row className='menu' >
					{SimpleTabs()}
				</Row>
			</Row>
			<MenuMobile right={right} setRight={setRight}/>
		</MediaMenu>

	)
}

export default AppMenu