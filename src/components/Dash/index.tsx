/**
 * Import Components from another Libraries
 */
import React from 'react'

/**
 * Import Components
 */

/**
 * Import Styles
 */
import { StyleDash } from './style'

/**
 * Import Interfaces
 */
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
