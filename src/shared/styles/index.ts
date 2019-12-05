import { createGlobalStyle } from 'styled-components'
import { styleVariables } from './variables'

export const GlobalStyle = createGlobalStyle`
  html, 
  body{
    box-sizing: border-box;
    margin: 0;  
    overflow-y: auto;
    @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
      font-size: ${styleVariables.fontSizes.normal.lg}px;
    }
  }

  * {
    box-sizing: inherit;
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
`
