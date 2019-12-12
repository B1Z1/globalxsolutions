import React from 'react'
import { IPropsListWithImages, IProductElement } from './interface'
import { Link } from 'gatsby'
import {} from './style'

import { StyleListElementWithDots } from '../../shared/styles/components/List'

class ListWithImages extends React.Component<IPropsListWithImages, {}> {
  generateItems(elements: IProductElement[]) {
    return elements.map((element, index) => (
      <StyleListElementWithDots key={index}>
        <Link to={`${this.props.parentRoot}${element.slug}`}>
          {element.name}
        </Link>
      </StyleListElementWithDots>
    ))
  }

  render() {
    const { elements } = this.props
    const $Items = this.generateItems(elements)

    return <ul>{$Items}</ul>
  }
}

export default ListWithImages
