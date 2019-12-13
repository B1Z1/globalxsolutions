import React from 'react'

import { StyleTextOnBlack } from './style'

import { IPropsTextOnBlack } from './interfaces'

class TextOnBlack extends React.Component<IPropsTextOnBlack, {}> {
  render() {
    const {
      children,
      withMargin,
      paddingRight,
      isDarkMode,
      animationToggle,
    } = this.props
    return (
      <StyleTextOnBlack
        isDarkMode={isDarkMode}
        withMargin={withMargin}
        paddingRight={paddingRight}
        animationToggle={animationToggle}
      >
        <span>{children}</span>
      </StyleTextOnBlack>
    )
  }
}

export default TextOnBlack
