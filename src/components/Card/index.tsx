import React from 'react'

import { StyleCard, StyleImage } from './style'

import { ICardProps } from './interface'

class Card extends React.Component<ICardProps, {}> {
  render() {
    const { title, icon } = this.props

    return (
      <StyleCard>
        <StyleImage src={icon} alt={title} />
        <figcaption>{title}</figcaption>
      </StyleCard>
    )
  }
}

export default Card
