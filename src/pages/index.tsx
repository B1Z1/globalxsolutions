import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Title from '../components/Title'

import MainLayout from '../layouts/Main'

import { styleVariables } from '../shared/styles/variables'

const StyleContentContainer = styled.div`
  position: relative;
  max-width: 512px;
  padding-bottom: 32px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    background-color: ${styleVariables.colors.main};
  }
  &:before {
    left: -8px;
    width: calc(100% + 8px);
    height: 1px;
  }
  &:after {
    right: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transform: translateY(50%);
  }
`

class IndexPage extends React.Component {
  render() {
    return (
      <MainLayout>
        <SEO title="Główna strona" />
        <Title withMargin={false}>Stawiamy na wiedzę i doświadczenie</Title>
        <StyleContentContainer>
          <p style={{ marginBottom: 0 }}>
            Ale przede wszystkim na profesjonalistów, którzy nie boją się wyzwań
            i nowatorskich rozwiązań, a wnoszą do projektu swoja najlepszą
            wiedzę.
          </p>
        </StyleContentContainer>
      </MainLayout>
    )
  }
}

export default IndexPage
