import styled from "styled-components"

export const Container = styled.header`
    box-sizing: border-box;
    padding: 0.5rem;
    background: #000;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 4rem;
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    a {
        color: #fff;
        font-size: 1rem;
        &.active {
            border-bottom: 2px solid #03a9f4;
        }
    }

    a:hover {
        filter: brightness(0.8);
    }

    #logo {
        font-size: 1.5rem;
        font-weight: bold;
    }

    #menu {
        display: flex;
        list-style: none;
        gap: 0.5rem;
    }

    #menu a {
        display: block;
        padding: 0.5rem;
    }

    #btn-mobile {
        display: none;
    }

    @media (max-width: 768px) {
        #menu {
            display: block;
            position: absolute;
            width: 100%;
            top: 3.9rem;
            left: 0px;
            background: #424242;
            transition: 0.6s;
            z-index: 1000;
            width: 0px;
            visibility: hidden;
            overflow-y: hidden;
            height: 100vh;
        }
        #nav.active #menu {
            width: 14rem;
            visibility: visible;
            overflow-y: auto;
        }
        #menu a {
            padding: 1rem 0;
            margin: 0 1rem;
            border-bottom: 2px solid #424242;
        }
        #btn-mobile {
            display: flex;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            border: none;
            background: none;
            cursor: pointer;
            gap: 0.5rem;
            color: #fff;
        }
        #hamburger {
            border-top: 2px solid;
            width: 20px;
        }
        #hamburger::after,
        #hamburger::before {
            content: "";
            display: block;
            width: 20px;
            height: 2px;
            background: currentColor;
            margin-top: 5px;
            transition: 0.3s;
            position: relative;
        }
        #nav.active #hamburger {
            border-top-color: transparent;
        }
        #nav.active #hamburger::before {
            transform: rotate(135deg);
        }
        #nav.active #hamburger::after {
            transform: rotate(-135deg);
            top: -7px;
        }
    }
`
