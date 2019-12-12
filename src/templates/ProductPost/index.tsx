import React from 'react'

import SEO from '../../components/seo'

import PostLayout from '../../layouts/Post'

class ProductPostTemplate extends React.Component {
  render() {
    return (
      <PostLayout
        linkTo="/conceptions"
        linkText="Koncepcje"
        title="Produkty"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Główna strona" />
      </PostLayout>
    )
  }
}

export default ProductPostTemplate
