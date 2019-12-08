import React from 'react'

import { StyleCard, StyleImage, StyleSvg } from './style'

import { ICardProps } from './interface'

class Card extends React.Component<ICardProps, {}> {
  render() {
    const { title, icon } = this.props

    return (
      <StyleCard>
        <img src={icon} alt={title} />
        <figcaption>{title}</figcaption>
        <StyleSvg
          xmlns="http://www.w3.org/2000/svg"
          width="56.569"
          height="33.941"
          viewBox="0 0 56.569 33.941"
        >
          <circle cx="4" cy="4" r="4" transform="translate(36 22)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="36 22; 36 0; 36 22"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="4" cy="4" r="4" transform="translate(13 0)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="13 0; 13 22; 13 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="4" cy="4" r="4" transform="translate(0 13)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 13; 0 0; 0 13"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="4" cy="4" r="4" transform="translate(44 5)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="44 5; 44 22; 44 5"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <line x1="23" y1="22" transform="translate(17 4)">
            <animate
              attributeName="y1"
              values="22;0;22"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="0;22;0"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
          <line y1="13" x2="13" transform="translate(4 4)">
            <animate
              attributeName="y1"
              values="13;0;13"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="0;22;0"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
          <line x1="8" y2="17" transform="translate(40 9)">
            <animate
              attributeName="y1"
              values="0;22;0"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="17;0;17"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
        </StyleSvg>
      </StyleCard>
    )
  }
}

export default Card
