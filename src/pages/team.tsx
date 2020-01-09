import React from 'react'

import SEO from '../components/seo'
import ChatBot from '../components/ChatBot'

import WrapperLayout from '../layouts/Wrapper'

class Team extends React.Component {
  render() {
    return (
      <WrapperLayout
        linkText="Infotech"
        linkTo="/infotech"
        title="Zapoznaj się z zespołem"
        titleWithMargin={true}
        isDarkMode={true}
      >
        <SEO title="Nasz zespół" />
        <ChatBot />
      </WrapperLayout>
    )
  }
}

export default Team
