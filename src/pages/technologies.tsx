/**
 * Import Components from another Libraries
 */
import React from 'react'
import styled from 'styled-components'
import { styleVariables } from '../shared/styles/variables'

/**
 * Import Components
 */
import SEO from '../components/seo'

/**
 * Import Layouts
 */
import MainLayout from '../layouts/Main'

class Technologies extends React.Component {
  render() {
    return (
      <MainLayout
        linkTo="/strategy-and-creation"
        linkText="Strategia i kreacja"
        title="Technologie"
        titleWithMargin={false}
      >
        <SEO title="Technologie" />
      </MainLayout>
    )
  }
}

export default Technologies
