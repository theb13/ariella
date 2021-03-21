import styled from 'styled-components';

export const Container = styled.div`

`;

export const BannerSection = styled.section`
    overflow: hidden;
    z-index: 0;
    position: relative;
    height:100vh;
    z-index: 5;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    .banner-box{
        width:90%;
        .title-container{
            display: flex;
            flex-direction:column;
            > :nth-child(2){
                align-self: flex-end;
            }
        }
        h1{
            font-size: 3rem;
        }
    }

    .diag-bg {
        width: 100vw;
        height: 100vh;
        -webkit-clip-path: polygon(0 0, 100% 100%, 100% 0);
        clip-path: polygon(0 0, 100% 100%, 100% 0);
        background: linear-gradient(to right,#164b54, #164b94 );
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    ::after {
        content: "";
        z-index:-2;
        width: 100%;
        height: 2px;
        background-color: #F50057;
        position: absolute;
        left: 0;
        bottom: 25%;
    }

    .arrowDown{
        position: absolute;
        bottom:75px;
    }
    .animated {
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
    }
    @-webkit-keyframes bounce {
        0%, 100% {
            -webkit-transform: translateY(0);
        }
        50% {
            -webkit-transform: translateY(-5px);
        }
    }
    @keyframes bounce {
        0%, 100% {
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

`