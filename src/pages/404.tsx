import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { styleVariables } from '../shared/styles/variables'
import { GlobalStyle } from '../shared/styles/index'

import SEO from '../components/seo'

const StyleWrapper = styled.div`
  position: relative;
  height: 100vh;
  animation: ou 0.4s ease-in-out infinite;

  @keyframes ou {
    0% {
      background-color: ${styleVariables.colors.main2};
    }
    100% {
      background-color: ${styleVariables.colors.operate};
    }
  }
`

const StyleContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  mix-blend-mode: color-burn;
  transform: translate(-50%, -50%);
`

const NotFoundPage = () => (
  <StyleWrapper>
    <GlobalStyle />
    <StyleContent>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>Przepraszamy ale danej strony nie istnieje</p>
      <Link to="/" style={{textDecoration: 'underline'}}>Wróć do głównej strony</Link>
    </StyleContent>
  </StyleWrapper>
)

export default NotFoundPage
