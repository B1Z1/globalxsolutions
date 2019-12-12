import React from 'react'

import SEO from '../../components/seo'

import WrapperLayout from '../../layouts/Wrapper'

class ProductPostTemplate extends React.Component {
  render() {
    return (
      <WrapperLayout
        linkTo="/conceptions"
        linkText="Koncepcje"
        title="Produkty"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Główna strona" />
      </WrapperLayout>
    )
  }
}

export default ProductPostTemplate
