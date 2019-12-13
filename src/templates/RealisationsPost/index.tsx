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
    const { content, gallery, name, next } = this.props.pageContext
    const html = content.childContentfulRichText.html
    console.log(next)
    const $Gallery = gallery.map((image: FluidObject, index: number) => (
      <StyleImage key={index}>
        <Img fluid={image} />
      </StyleImage>
    ))

    return (
      <WrapperLayout
        linkTo={next.path}
        linkText={next.name}
        title={name}
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title={`Produkt: ${name}`} />
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
