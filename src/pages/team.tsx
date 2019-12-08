import React from 'react'
import styled from 'styled-components'
import { styleVariables } from '../shared/styles/variables'

import SEO from '../components/seo'

import MainLayout from '../layouts/Main'

class Team extends React.Component {
  render() {
    return (
      <MainLayout
        linkText="Produkty i koncepcje"
        linkTo="/products-and-conceptions"
        title="Zapoznaj się z zespołem"
        titleWithMargin={true}
        isDarkMode={true}
      >
        <SEO title="Nasz zespół" />
      </MainLayout>
    )
  }
}

export default Team
