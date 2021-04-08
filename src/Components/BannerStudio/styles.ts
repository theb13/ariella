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
    background: linear-gradient(to bottom, rgb(0, 0, 0), #232526);
    .card-content-banner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #111, #616161);
        z-index: 2;
        opacity: 0.5;
    }
`

export const Card = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin: 10px;
    overflow: hidden;

    .img-description {
        display: none;
        position: absolute;
        top: 40%;
        left: 20%;
        opacity: 1;
    }
    :hover {
        .img-description {
            display: block;
        }
        ::before {
            display: block;
        }
    }
    ::before {
        content: "";
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.6;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000, #232526);
        z-index: 2;
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
