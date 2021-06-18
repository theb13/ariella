import React, { useEffect } from "react"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

import styled from "styled-components"

export const Button = styled.button`
    /* display: none; */
    text-align: center;
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
`

const ScrollTop: React.FC = () => {
    useEffect(() => {
        console.log(window.onscroll)
    }, [])

    return (
        <Button>
            <KeyboardArrowUpIcon />
        </Button>
    )
}

export default ScrollTop
