import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'

import WrapperLayout from '../layouts/Wrapper'

class TalkAboutUsPage extends React.Component {
  TITLE = 'Mówią o nas'
  DESCRIPTION = 'Co mówią media o GlobalXSolutions'
  LINK_TO = '/contact'
  LINK_TEXT = 'Kontakt'
  TITLE_WITH_MARGIN = true
  IS_DARK_MODE = false

  render() {
    return (
      <WrapperLayout
        linkTo={this.LINK_TO}
        linkText={this.LINK_TEXT}
        title={this.TITLE}
        titleWithMargin={this.TITLE_WITH_MARGIN}
        isDarkMode={this.IS_DARK_MODE}
      >
        <SEO title={this.TITLE} />
      </WrapperLayout>
    )
  }
}

export default TalkAboutUsPage
