import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import SEO from '../../components/seo'

import WrapperLayout from '../../layouts/Wrapper'

import { IPropsBlogPost } from './interfaces'

import {} from './style'

class ProductPostTemplate extends React.Component<IPropsBlogPost, {}> {
  render() {
    const { content, title, next } = this.props.pageContext
    const { json } = content
    return (
      <WrapperLayout
        linkTo={next.url}
        linkText={next.name}
        title={title}
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title={`Newsroom - ${title}`} />
        <div>{documentToReactComponents(json)}</div>
      </WrapperLayout>
    )
  }
}

export default ProductPostTemplate
