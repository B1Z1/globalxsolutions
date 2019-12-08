import React from 'react'

import { StyleTextOnBlack } from './style'

import { IPropsTextOnBlack } from './interfaces'

class TextOnBlack extends React.Component<IPropsTextOnBlack, {}> {
  render() {
    const { children, withMargin, paddingRight } = this.props
    return (
      <StyleTextOnBlack withMargin={withMargin} paddingRight={paddingRight}>
        {children}
      </StyleTextOnBlack>
    )
  }
}

export default TextOnBlack
