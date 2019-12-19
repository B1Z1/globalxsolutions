import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { StyleImage, StyleElementWrapper, StyleLink } from './style'
import { StyleListElementWithDots } from '../../shared/styles/components/List'

import { IPropsListWithImages } from './interface'

class ListWithImages extends React.Component<IPropsListWithImages, {}> {
  render() {
    const { elements } = this.props
    const $Items = elements.map((element, index) => (
      <StyleListElementWithDots
        key={index}
        animateIt={true}
        delay={index * 0.3}
        dotPosition="center"
      >
        <StyleElementWrapper>
          <StyleLink>
            <Link to={`${this.props.parentRoot}${element.slug}`}>
              {element.linkText}
            </Link>
          </StyleLink>
          {element.mainImage.fluid.src !== null ? (
            <StyleImage>
              <Img fluid={element.mainImage.fluid} />
            </StyleImage>
          ) : null}
        </StyleElementWrapper>
      </StyleListElementWithDots>
    ))

    return <ul>{$Items}</ul>
  }
}

export default ListWithImages
