import { createGlobalStyle } from "styled-components"

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
    }
    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding:0;
      margin:0;
    }
    button::-moz-focus-inner { border: 0; }


    @media (max-width: 768px){
        .hiddenMobile{
            display:none;
        }
    }
`
