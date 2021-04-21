import styled from "styled-components"
import Logo from "../../assets/img/logoCombo.jpeg"

export const Container = styled.div``

export const BannerSection = styled.section`
    overflow: hidden;
    z-index: 0;
    position: relative;
    height: 90vh;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .row-title {
        position: absolute;
        top: 15%;
        right: 5%;
    }

    .diag-bg {
        width: 100vw;
        height: 100vh;
        clip-path: polygon(100% 0, 100% 100%, 0 0);
        background: linear-gradient(to right, #164b54, #164b94);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    ::after {
        content: "";
        z-index: -2;
        width: 100%;
        height: 2px;
        background-color: #f50057;
        position: absolute;
        left: 0;
        bottom: 20%;
    }
    ::before {
        content: "";
        background: url(${Logo}) no-repeat left center;
        background-size: 60vw;
        z-index: -3;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .arrowDown {
        position: absolute;
        bottom: 5%;
    }
    .animated {
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
    }
    @-webkit-keyframes bounce {
        0%,
        100% {
            -webkit-transform: translateY(0);
        }
        50% {
            -webkit-transform: translateY(-5px);
        }
    }
    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
    }
    .arrowDown {
        -webkit-animation-name: bounce;
        animation-name: bounce;
    }

    @media (max-width: 769px) {
        height: 50vh;
        .diag-bg {
            width: 100%;
            height: 100%;
        }
        .banner-title {
            font-size: 1.1rem;
        }
    }
`
