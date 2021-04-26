import styled from "styled-components"

export const ContainerFooter = styled.div`
    margin-top: 20px;
    padding: 20px 80px;
    min-height: 100px;
    color: #fff;
    position: relative;
    background-color: #424242;
    a {
        text-align: center;
        padding: 5px;
        margin: 0 5px;
    }
    @media (max-width: 576px) {
        font-size: 0.8rem;
        padding: 20px 40px;
        > div {
            justify-content: center;
        }
    }
`

export const MediaMenu = styled.div`
    @media (max-width: 768px) {
        .menu {
            display: none;
        }
    }

    @media (min-width: 768px) {
        .menu-mobile {
            display: none;
        }
    }
`
