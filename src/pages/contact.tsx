import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'

import WrapperLayout from '../layouts/Wrapper'

class ContactPage extends React.Component {
  render() {
    return (
      <WrapperLayout
        linkTo="/contact"
        linkText=""
        title="Jest nam miło skontaktować się z tobą"
        titleWithMargin={true}
        isDarkMode={true}
      >
        <SEO title="Kontakt" />
        <ContactForm />
      </WrapperLayout>
    )
  }
}

export default ContactPage
