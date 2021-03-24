import styled from "styled-components"

interface Props {
    img: string
}

export const Container = styled.div`
    background-image: url(${(props: Props) => props.img});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    height: 100vh;
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
