/**
 * Import Components from another Libraries
 */
import React from 'react'
import { Link } from 'gatsby'

/**
 * Import Components
 */
import Sidebar from '../../components/Sidebar'
import Burger from '../../components/Burger'
import Circle from '../../components/Circle'
import Dash from '../../components/Dash'
import SocialMedia from '../../components/SocialMedia'
import TextOnBlack from '../../components/TextOnBlack'

/**
 * Import Styles
 */
import {
  StyleWrapper,
  StyleContentWrapper,
  StyleLinkWrapper,
  StyleTitle,
} from './style'
import { GlobalStyle } from '../../shared/styles/index'

/**
 * Import Interfaces
 */
import { IStateMain, IPropsMain } from './interfaces'

class MainLayout extends React.Component<IPropsMain, IStateMain> {
  constructor(props) {
    super(props)

    this.state = {
      isSidebarActive: false,
    }
  }

  toggleSidebar() {
    this.setState({
      isSidebarActive: !this.state.isSidebarActive,
    })
  }

  render() {
    const { children, linkText, linkTo, title, titleWithMargin } = this.props
    const { isSidebarActive } = this.state

    return (
      <StyleWrapper>
        <GlobalStyle />
        <StyleContentWrapper>
          <Circle top="0" left="24px" withDot={false} />
          <Dash
            top="0"
            left="0"
            dashWidth="1px"
            dashHeight="calc(100% - 13px)"
          />
          <Dash top="0" left="0" dashWidth="24px" dashHeight="1px" />
          <Dash top="0" left="32px" dashWidth="1px" dashHeight="24px" />
          <StyleTitle>
            <TextOnBlack paddingRight="32px" withMargin={titleWithMargin}>
              {title}
            </TextOnBlack>
          </StyleTitle>
          <div>{children}</div>
          <StyleLinkWrapper>
            <Dash top="50%" left="-8px" dashWidth="18px" dashHeight="1px" />
            <Dash top="25%" left="16px" dashWidth="1px" dashHeight="126%" />
            <Dash bottom="-14px" left="16px" dashWidth="45%" dashHeight="1px" />
            <Circle withDot={true} top="50%" left="8.5px" />
            <Circle withDot={true} top="150%" left="50%" />
            <Link to={linkTo}>{linkText}</Link>
          </StyleLinkWrapper>
        </StyleContentWrapper>
        <Burger
          onClick={() => {
            this.toggleSidebar()
          }}
          active={isSidebarActive}
        />
        <Sidebar active={isSidebarActive} />
        <SocialMedia />
      </StyleWrapper>
    )
  }
}

export default MainLayout
