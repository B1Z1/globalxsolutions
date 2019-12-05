import React from 'react'
/**
 * Import Components
 */
import Dash from '../Dash'
import Circle from '../Circle'

/**
 * Import Styles
 */
import {
  StyleList,
  StyleItem,
  StyleLink,
  StyleDash,
  StyleCircle,
} from './style'

/**
 * Import Interfaces
 */

class SocialMedia extends React.Component<{}, {}> {
  render() {
    return (
      <StyleList>
        <StyleItem>
          <StyleLink href="">
            <StyleDash>
              <Dash top="0" left="0" dashWidth="1px" dashHeight="16px" />
            </StyleDash>
            <StyleCircle>
              <Circle top="0" left="0" withDot={true} />
            </StyleCircle>
            Facebook
          </StyleLink>
        </StyleItem>
        <StyleItem>
          <StyleLink href="">Twitter</StyleLink>
        </StyleItem>
      </StyleList>
    )
  }
}

export default SocialMedia
