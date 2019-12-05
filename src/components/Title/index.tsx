import React from 'react'

import { StyleTitle } from './style'

import { Props } from './interfaces'

class Title extends React.Component<Props, {}> {
  render() {
    const { children, withMargin } = this.props
    return <StyleTitle withMargin={withMargin}>{children}</StyleTitle>
  }
}

export default Title
