import React from 'react'

import { StyleCircle } from './style'

import { IPropsCircle } from './interface'

class Circle extends React.Component<IPropsCircle, {}> {
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
