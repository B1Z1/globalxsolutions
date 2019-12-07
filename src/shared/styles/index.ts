import { createGlobalStyle } from 'styled-components'
import { styleVariables } from './variables'

export const GlobalStyle = createGlobalStyle`
  html, 
  body{
    box-sizing: border-box;
    margin: 0;  
    @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
      font-size: ${styleVariables.fontSizes.normal.lg}px;
    }
  }

  html {
    overflow-y: auto;
  }

  body {
    @media only screen and (orientation: landscape) and (max-width: ${styleVariables.breakPoints.md}) {
      &:before{
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${styleVariables.colors.main2};
        z-index: 9999;
      }
      &:after{
        content: "Prosimy przewrócić urządzenie";
        position: fixed;
        top: 50%;
        left: 50%;
        color: ${styleVariables.colors.main};
        transform: translate(-50%, -50%);
        z-index: 9999;
      }
    }
  }

  ul {
    margin-left: 0;
  }

  ul,
  li {
    margin-bottom: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  h1,
  h2,
  h3,
  h4, 
  h5,
  h6 {
    line-height: 1.5em;
  }

  h1 {
    font-size: ${styleVariables.fontSizes.h1};
  }
`
