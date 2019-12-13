import React from 'react'
import styled from 'styled-components'
import { styleVariables } from '../shared/styles/variables'

import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'

import WrapperLayout from '../layouts/Wrapper'

class ContactPage extends React.Component {
  render() {
    const isDarkMode = true

    return (
      <WrapperLayout
        linkTo="/contact"
        linkText=""
        title="Kontakt"
        titleWithMargin={true}
        isDarkMode={isDarkMode}
      >
        <SEO title="Kontakt" />
        <ContactForm isDarkMode={isDarkMode} />
        <p>Poniedziałek – Piątek pomiędzy 09:00 – 17:00</p>
        <p>
          Skontaktuj się z nami: +48 789 421 478 <br /> lub napisz
          <a
            style={{
              borderBottom: `1px solid ${styleVariables.colors.operate}`,
            }}
            href="mailto: office@globalxsolutions.pl"
          >
            {' '}
            office@globalxsolutions.pl
          </a>
        </p>
        <p style={{ paddingBottom: '32px' }}>
          © 2018 globalxsolutions.pl All rights reserved.
        </p>
      </WrapperLayout>
    )
  }
}

export default ContactPage
