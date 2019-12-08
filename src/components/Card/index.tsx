import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { ICardProps } from './interface'

class Card extends React.Component<ICardProps, {}> {
  render() {
    const { title, icon } = this.props

    return (
      <div>
        <figure>
          <img src={icon} alt="Ikona" />
          <figcaption>{title}</figcaption>
        </figure>
      </div>
    )
  }
}

export default Card
