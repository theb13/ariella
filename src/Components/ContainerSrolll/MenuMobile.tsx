import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
// import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
    list: {
        width: 250,
        backgroundColor: "#424242",
        height: "100%",
    },
})

interface Props {
    right: boolean
    setRight: any
}

// eslint-disable-next-line react/prop-types
const MenuMobile: React.FC<Props> = ({ right, setRight }) => {
    const classes = useStyles()

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return
        }

        setRight(open)
    }

    const list = () => (
        <div
            style={{}}
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <Link to="/">
                    <ListItem button>
                        <ListItemText primary=" Início" />
                    </ListItem>
                </Link>
                <Link to="/ariellaStudio">
                    <ListItem button>
                        <ListItemText primary=" AriellaStudio" />
                    </ListItem>
                </Link>
                <Link to="/contact">
                    <ListItem button>
                        <ListItemText primary=" Contacto" />
                    </ListItem>
                </Link>
                <Link to="/blog">
                    <ListItem button>
                        <ListItemText primary=" Notícias" />
                    </ListItem>
                </Link>
                <Link to="/about">
                    <ListItem button>
                        <ListItemText primary=" Sobre nós" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
        </div>
    )

    return (
        <div>
            <>
                <Drawer open={right} onClose={toggleDrawer(false)}>
                    {list()}
                </Drawer>
            </>
        </div>
    )
}

export default MenuMobile
