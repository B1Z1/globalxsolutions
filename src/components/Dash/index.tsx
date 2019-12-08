import React from 'react'

import { StyleDash } from './style'

import { IPropsDash } from './interface'

class Dash extends React.Component<IPropsDash, {}> {
  render() {
    const { top, right, bottom, left, dashWidth, dashHeight } = this.props

    return (
      <StyleDash
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        dashWidth={dashWidth}
        dashHeight={dashHeight}
      />
    )
  }
}

export default Dash
