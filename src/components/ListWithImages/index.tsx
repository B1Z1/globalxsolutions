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
      <StyleListElementWithDots key={index}>
        <StyleElementWrapper>
          <StyleLink>
            <Link to={`${this.props.parentRoot}${element.slug}`}>
              {element.name}
            </Link>
          </StyleLink>
          <StyleImage>
            <Img fluid={element.mainImage.fluid} />
          </StyleImage>
        </StyleElementWrapper>
      </StyleListElementWithDots>
    ))

    return <ul>{$Items}</ul>
  }
}

export default ListWithImages