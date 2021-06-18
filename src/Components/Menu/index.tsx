/* eslint-disable react/button-has-type */
import { Container } from "@material-ui/core"
import React, { useRef } from "react"
import { Link } from "react-router-dom"
// import MenuIcon from "@material-ui/icons/Menu"

import { Container as Nav } from "./styles"

const Menu: React.FC = () => {
    const refMenuButton = useRef<HTMLButtonElement>(null)
    const refCloseMenu = useRef<HTMLDivElement>(null)

    function toggleMenu() {
        refCloseMenu.current?.classList.toggle("active")
    }
    function removeActiveMenu() {
        refCloseMenu.current?.classList.remove("active")
    }
    function handleButtonMenu() {
        refMenuButton.current?.addEventListener("click", toggleMenu)
    }
    function handlerefCloseMenu(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        refCloseMenu.current?.classList.remove("active")
        event.currentTarget.classList.add("active")
    }

    return (
        <Nav onBlur={removeActiveMenu}>
            <Container>
                <Link id="logo" to="/">
                    AriellaBoats
                </Link>
                <nav id="nav" ref={refCloseMenu}>
                    <button
                        id="btn-mobile"
                        ref={refMenuButton}
                        onClick={handleButtonMenu}
                    >
                        <span id="hamburger" />
                    </button>
                    <ul id="menu" role="menu">
                        <li>
                            <Link
                                className="active"
                                onClick={handlerefCloseMenu}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handlerefCloseMenu}
                                to="/ariellaStudio"
                            >
                                AriellaStudio
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handlerefCloseMenu} to="/contact">
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handlerefCloseMenu} to="/blog">
                                Notícias
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handlerefCloseMenu} to="/about">
                                Sobre nós
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </Nav>
    )
}

export default Menu
