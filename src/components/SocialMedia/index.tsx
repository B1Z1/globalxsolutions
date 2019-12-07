import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

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
  StyleSocialSvg,
} from './style'

class SocialMedia extends React.Component<{}, {}> {
  render() {
    return (
      <StyleList>
        <StyleItem>
          <StyleLink
            href="https://www.facebook.com/Global-X-Solutions-723092674530948/"
            title="GlobalXSolutions Facebook"
            target="_blank"
          >
            <StyleDash>
              <Dash top="0" left="0" dashWidth="1px" dashHeight="16px" />
            </StyleDash>
            <StyleCircle>
              <Circle top="0" left="0" withDot={true} />
            </StyleCircle>
            <StyleSocialSvg viewBox="0 0 64 64">
              <path
                d="M57.143,2.25H6.857A6.857,6.857,0,0,0,0,9.107V59.393A6.857,6.857,0,0,0,6.857,66.25H26.464V44.491h-9V34.25h9V26.444c0-8.879,5.286-13.783,13.381-13.783a54.524,54.524,0,0,1,7.931.691v8.714H43.31c-4.4,0-5.774,2.731-5.774,5.533v6.65h9.826L45.79,44.491H37.536V66.25H57.143A6.857,6.857,0,0,0,64,59.393V9.107A6.857,6.857,0,0,0,57.143,2.25Z"
                transform="translate(0 -2.25)"
              />
            </StyleSocialSvg>
          </StyleLink>
        </StyleItem>
        <StyleItem>
          <StyleLink
            href="https://www.linkedin.com/company/globalxsolutionspl/"
            title="GlobalXSolutions LinkedIn"
            target="_blank"
          >
            <StyleDash>
              <Dash top="0" left="0" dashWidth="1px" dashHeight="16px" />
            </StyleDash>
            <StyleCircle>
              <Circle top="0" left="0" withDot={true} />
            </StyleCircle>
            <StyleSocialSvg viewBox="0 0 64 64">
              <path
                d="M59.429,2.25H4.557A4.591,4.591,0,0,0,0,6.864V61.636A4.591,4.591,0,0,0,4.557,66.25H59.429A4.6,4.6,0,0,0,64,61.636V6.864A4.6,4.6,0,0,0,59.429,2.25ZM19.343,57.107H9.857V26.564h9.5V57.107ZM14.6,22.393a5.5,5.5,0,1,1,5.5-5.5,5.5,5.5,0,0,1-5.5,5.5ZM54.9,57.107H45.414V42.25c0-3.543-.071-8.1-4.929-8.1-4.943,0-5.7,3.857-5.7,7.843V57.107H25.3V26.564h9.1v4.171h.129a9.991,9.991,0,0,1,8.986-4.929c9.6,0,11.386,6.329,11.386,14.557Z"
                transform="translate(0 -2.25)"
              />
            </StyleSocialSvg>
          </StyleLink>
        </StyleItem>
      </StyleList>
    )
  }
}

export default SocialMedia
