import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import SEO from '../../components/seo'
import Gallery from '../../components/Gallery'

import WrapperLayout from '../../layouts/Wrapper'

import { IPropsProductPost } from './interfaces'

import {
  StyleContentWrapper,
  StylePostWrapper,
  StyleImage,
  StyleGalleryWrapper,
} from './style'

class ProductPostTemplate extends React.Component<IPropsProductPost, {}> {
  render() {
    const { content, gallery, title, next } = this.props.pageContext
    const { json } = content
    const galleryData = gallery.map((image: FluidObject) => {
      return { fluid: image, alt: title }
    })

    return (
      <WrapperLayout
        linkTo={next.url}
        linkText={next.title}
        title={title}
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title={`Produkt: ${title}`} />
        <StylePostWrapper>
          <StyleContentWrapper>
            {documentToReactComponents(json, {
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: node => (
                  <img
                    src={node.data.target.fields.file['en-US'].url}
                    alt={node.data.target.fields.title['en-US']}
                  />
                ),
              },
            })}
          </StyleContentWrapper>
          <Gallery elements={galleryData} />
        </StylePostWrapper>
      </WrapperLayout>
    )
  }
}

export default ProductPostTemplate
