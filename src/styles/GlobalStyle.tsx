import { createGlobalStyle } from "styled-components"
import "react-multi-carousel/lib/styles.css"

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration:none;
        font-family:'Nunito','Source Sans Pro', sans-serif;
        list-style-type: none;

    }
    a{
      color:#fff;
    }
    body{
      background:#fff;
    scroll-behavior:smooth;
    }
    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding:0;
      margin:0;
    }
    button::-moz-focus-inner { border: 0; }

    .fb_dialog_content{
        iframe:first-of-type{
            bottom: 5rem !important;
            right: 0px !important;
        }
    }
    @media (max-width: 768px){
        .hiddenMobile{
            display:none;
        }
    }
    @media (min-width: 1200px) {
        .modal {
            max-width: 900px ;
        }
    }
    .carousel-container {
        width: 100% ;
    }
    .carousel-item{
        padding:40px;
    }
    /* [dir="rtl"] .carousel-container {
        direction: ltr;
    } */
`
