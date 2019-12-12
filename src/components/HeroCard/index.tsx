import React from 'react'
import Img from 'gatsby-image'

import TextOnBlack from '../TextOnBlack'

import { IPropsHeroCard } from './interface'

class HeroCard extends React.Component<IPropsHeroCard> {
  render() {
    const { name, profession, description, photo } = this.props
    return (
      <div>
        <figure>
          <Img fixed={photo} />
        </figure>
        <TextOnBlack withMargin={true} isDarkMode={true}>
          {name}
        </TextOnBlack>
        <p>{profession}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default HeroCard
