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
