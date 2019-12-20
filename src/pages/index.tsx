import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Circle from '../components/Circle'
import Dash from '../components/Dash'

import WrapperLayout from '../layouts/Wrapper'

const StyleContentContainer = styled.div`
  position: relative;
  max-width: 512px;
  padding-bottom: 32px;
`

class IndexPage extends React.Component {
  render() {
    return (
      <WrapperLayout
        linkTo="/what-we-do"
        linkText="Czym się zajmujemy"
        title="Stawiamy na wiedzę i doświadczenie"
        titleWithMargin={false}
        isDarkMode={false}
      >
        <SEO
          title="Główna strona"
          description="Stawiamy na wiedzę i doświadczenie, ale przede wszystkim na profesjonalistów, którzy nie boją się wyzwań i nowatorskich rozwiązań, a wnoszą do projektu swoja najlepszą wiedzę."
        />
        <StyleContentContainer>
          <Dash
            bottom="0"
            left="-8px"
            dashWidth="calc(100% + 8px)"
            dashHeight="1px"
            isDarkMode={false}
          />
          <p style={{ marginBottom: 0 }}>
            Ale przede wszystkim na profesjonalistów, którzy nie boją się wyzwań
            i nowatorskich rozwiązań, a wnoszą do projektu swoja najlepszą
            wiedzę.
          </p>
          <Circle top="100%" right="0" withDot={false} isDarkMode={false} />
        </StyleContentContainer>
      </WrapperLayout>
    )
  }
}

export default IndexPage
