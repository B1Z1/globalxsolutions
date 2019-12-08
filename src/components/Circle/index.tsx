import React from 'react'

import { StyleCircle } from './style'

import { IPropsCircles } from './interface'

class Circle extends React.Component<IPropsCircles, {}> {
  render() {
    const { top, right, left, bottom, withDot, isDarkMode } = this.props

    return (
      <StyleCircle
        withDot={withDot}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        isDarkMode={isDarkMode}
      />
    )
  }
}

export default Circle
