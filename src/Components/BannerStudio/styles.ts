import styled from "styled-components"

export const Container = styled.section`
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
    @media (max-width: 768px) {
        margin-top: -5px;
        height: 100%;
        .logo-container {
            margin-top: 30px;
        }
    }
`

export const Card = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin: 10px;
    overflow: hidden;

    .img-description {
        position: absolute;
        top: 40%;
        left: 20%;
    }
    :hover {
        cursor: pointer;
        .img-description {
            p {
                font-size: 1.3rem;
                color: #fff;
                transition: all 700ms ease;
                -moz-transition: all 700ms ease;
                -webkit-transition: all 700ms ease;
                -ms-transition: all 700ms ease;
                -o-transition: all 700ms ease;
            }
            z-index: 3;
        }
        ::before {
            opacity: 0.8;
            transition: all 700ms ease;
            -moz-transition: all 700ms ease;
            -webkit-transition: all 700ms ease;
            -ms-transition: all 700ms ease;
            -o-transition: all 700ms ease;
        }
    }
    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.5;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000, #232526);
        z-index: 2;
    }
`
