import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'

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
        <SEO title="" />
        <form
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input name="bot-field" type="hidden" />
          <input name="fistname" type="text" />
          <button>Send</button>
        </form>
      </WrapperLayout>
    )
  }
}

export default ContactPage
