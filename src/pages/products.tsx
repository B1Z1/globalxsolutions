import React from 'react'
import styled from 'styled-components'
import { styleVariables } from '../shared/styles/variables'

import SEO from '../components/seo'
import Circle from '../components/Circle'
import Dash from '../components/Dash'

import MainLayout from '../layouts/Main'

const StyleContentContainer = styled.div`
  position: relative;
  max-width: 512px;
  padding-bottom: 32px;
`

class Products extends React.Component {
  render() {
    return (
      <MainLayout
        linkTo="/conceptions"
        linkText="Koncepcje"
        title="Produkty"
        titleWithMargin={true}
        isDarkMode={true}
      >
        <SEO title="Główna strona" />
        <StyleContentContainer>

        </StyleContentContainer>
      </MainLayout>
    )
  }
}

export default Products
