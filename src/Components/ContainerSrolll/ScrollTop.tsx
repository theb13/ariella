import React, { useEffect, useState } from "react"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import styled from "styled-components"
import { useWindowScroll } from "react-use"

export const Button = styled.button`
    /* text-align: center; */
    display: grid;
    justify-content: center;
    align-items: center;
    width: 2.8rem;
    height: 2.8rem;
    position: fixed;
    bottom: 1.4rem;
    right: 0.9rem;
    z-index: 99;
    border: none;
    outline: none;
    background: #0287c3;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    :hover {
        filter: brightness(0.9);
    }
    &.hidden {
        display: none;
    }
`

const ScrollTop: React.FC = () => {
    const { y: pageOffset } = useWindowScroll()
    const [visibility, setVisibility] = useState(false)
    useEffect(() => {
        if (pageOffset > 400) setVisibility(true)
        else setVisibility(false)
    }, [pageOffset])

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <Button className={`${visibility ? "" : "hidden"}`} onClick={scrollTop}>
            <KeyboardArrowUpIcon />
        </Button>
    )
}

export default ScrollTop
