import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import SEO from '../../components/seo'

import WrapperLayout from '../../layouts/Wrapper'

import { IPropsProductPost } from './interfaces'

import {
  StyleContentWrapper,
  StylePostWrapper,
  StyleGalleryWrapper,
  StyleImage,
} from './style'

class ProductPostTemplate extends React.Component<IPropsProductPost, {}> {
  render() {
    const { content, gallery, title, next } = this.props.pageContext
    const html = content.childContentfulRichText.html
    const $Gallery = gallery.map((image: FluidObject, index: number) => (
      <StyleImage key={index}>
        <Img fluid={image} />
      </StyleImage>
    ))

    return (
      <WrapperLayout
        linkTo={next.path}
        linkText={next.title}
        title={title}
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title={`Produkt: ${title}`} />
        <StylePostWrapper>
          <StyleContentWrapper
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></StyleContentWrapper>
          <StyleGalleryWrapper>{$Gallery}</StyleGalleryWrapper>
        </StylePostWrapper>
      </WrapperLayout>
    )
  }
}

export default ProductPostTemplate
