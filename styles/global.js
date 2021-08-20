import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        background-color: #F8F9FA;
        /* background-color: #344767; */
    }

    ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a, a:hover{
        text-decoration: none;
        color: black;
        display: inline-block;
    }

    .myshadow{
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    }

    .shadow{
        box-shadow: 0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07) !important;
    }

    .rounded{
        border-radius: 8px !important;
    }
`

export default GlobalStyles;