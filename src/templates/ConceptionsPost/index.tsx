import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import SEO from '../../components/seo'

import WrapperLayout from '../../layouts/Wrapper'

import { IPropsConceptionsPost } from './interfaces'

import {
  StyleContentWrapper,
  StylePostWrapper,
  StyleGalleryWrapper,
  StyleImage,
} from './style'

class ConceptionsPostTemplate extends React.Component<
  IPropsConceptionsPost,
  {}
> {
  render() {
    const {
      content,
      gallery,
      mainImage,
      name,
      next,
      parentPath,
    } = this.props.pageContext
    const html = content.childContentfulRichText.html
    let nextLink =
        next !== null ? '/conceptions' : `${parentPath}/${next.slug}`,
      nextTitle = next !== null ? 'Koncepcje' : next.name

    const $Gallery = gallery.map((image: FluidObject, index: number) => (
      <StyleImage key={index}>
        <Img fluid={image} />
      </StyleImage>
    ))

    return (
      <WrapperLayout
        linkTo={nextLink}
        linkText={nextTitle}
        title={name}
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title={`Produkt: ${name}`} />
      </WrapperLayout>
    )
  }
}

export default ConceptionsPostTemplate
