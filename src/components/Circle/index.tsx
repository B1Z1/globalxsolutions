import React from 'react'

import { StyleCircle } from './style'

import { Props } from './interface'

class Circle extends React.Component<Props, {}> {
  render() {
    const { top, left, withDot } = this.props

    return <StyleCircle withDot={withDot} top={top} left={left} />
  }
}

export default Circle
