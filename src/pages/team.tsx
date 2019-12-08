import React from 'react'

import SEO from '../components/seo'
import ChatBot from '../components/ChatBot'

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
        <ChatBot />
      </MainLayout>
    )
  }
}

export default Team
