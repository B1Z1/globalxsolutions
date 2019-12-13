import React from 'react'

import SEO from '../../components/seo'

import WrapperLayout from '../../layouts/Wrapper'

import { IPropsBlogPost } from './interfaces'

import {} from './style'

class ProductPostTemplate extends React.Component<IPropsBlogPost, {}> {
  render() {
    const { content, title, next } = this.props.pageContext
    const html = content.childContentfulRichText.html

    return (
      <WrapperLayout
        linkTo={next.path}
        linkText={next.name}
        title={title}
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title={`Newsroom - ${title}`} />
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
      </WrapperLayout>
    )
  }
}

export default ProductPostTemplate
