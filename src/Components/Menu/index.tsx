/* eslint-disable react/button-has-type */
import { Container } from "@material-ui/core"
import React, { useRef } from "react"
import { NavLink, Link } from "react-router-dom"
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

    return (
        <Nav onBlur={removeActiveMenu}>
            <Container>
                <h1>
                    <Link id="logo" to="/">
                        <span style={{ color: "#0074B4" }}>Ariella</span>
                        <span style={{ color: "#FDB52D" }}>Group</span>
                    </Link>
                </h1>
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
                            <NavLink to="/ariellaStudio">AriellaStudio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Notícias</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Sobre nós</NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </Nav>
    )
}

export default Menu
