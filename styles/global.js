import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        background-color: #F8F9FA;
        overflow-x: hidden;
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
<<<<<<< HEAD
    .sidebar_res{
        margin: 100px 50px;
    }
    .sidebar_res {
        ul {
        li {
        &.active {
          padding: 10px 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
          .icon {
            background-color: #cb0c9f;
            color: #fff !important;
          }
          a {
            color: #000;
            font-weight: 600;
          }
        }}}
    }
`;
=======

    .MuiDrawer-paperAnchorTop{
                width: 80% !important;
                margin: auto !important;
                border-radius: 20px 20px 0 0;
                top: 40px !important;
                display: none;

                ::-webkit-scrollbar {
                width: 2px;
                height: 7px;
                }
                ::-webkit-scrollbar-track {
                background: #f1f1f1;
                }
                ::-webkit-scrollbar-thumb {
                background: #394061;
                }
                ::-webkit-scrollbar-thumb:hover {
                background: #394090;
                }
    } 
`
>>>>>>> c0ea642197c40d96a76d85290cc6e239b41b39d5

export default GlobalStyles;
