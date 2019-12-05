import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Title from '../components/Title'

import MainLayout from '../layouts/Main'

import { styleVariables } from '../shared/styles/variables'

const StyleContentContainer = styled.div`
  position: relative;
  max-width: 512px;
  border-bottom: 1px solid ${styleVariables.colors.main};
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
    background-color: ${styleVariables.colors.main};
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
          <p>
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
