import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, 
  body{
    box-sizing: border-box;
    margin: 0;  
    overflow-y: auto;
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
