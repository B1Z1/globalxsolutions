import React from 'react'
import { Link } from 'gatsby'

import Sidebar from '../../components/Sidebar'
import Burger from '../../components/Burger'
import Circle from '../../components/Circle'
import Dash from '../../components/Dash'
import SocialMedia from '../../components/SocialMedia'
import TextOnBlack from '../../components/TextOnBlack'

import { StyleWrapper, StyleContentWrapper, StyleTitle } from './style'
import { GlobalStyle } from '../../shared/styles/index'

import { IStateProduct, IPropsProduct } from './interface'

class PostLayout extends React.Component<IPropsProduct, IStateProduct> {
  constructor(props) {
    super(props)

    this.state = {
      isSidebarActive: false,
      isDarkMode: false,
    }
  }

  toggleSidebar() {
    this.setState({
      isSidebarActive: !this.state.isSidebarActive,
    })
  }

  render() {
    const { children, title, titleWithMargin } = this.props
    const { isSidebarActive, isDarkMode } = this.state

    return (
      <StyleWrapper>
        <GlobalStyle />
        <StyleContentWrapper>
          <Circle isDarkMode={isDarkMode} top="0" left="24px" withDot={false} />
          <Dash
            isDarkMode={isDarkMode}
            top="0"
            left="0"
            dashWidth="1px"
            dashHeight="calc(100% - 13px)"
          />
          <Dash
            isDarkMode={isDarkMode}
            top="0"
            left="0"
            dashWidth="24px"
            dashHeight="1px"
          />
          <Dash
            isDarkMode={isDarkMode}
            top="0"
            left="32px"
            dashWidth="1px"
            dashHeight="24px"
          />
          <StyleTitle>
            <TextOnBlack
              isDarkMode={isDarkMode}
              paddingRight="32px"
              withMargin={titleWithMargin}
            >
              {title}
            </TextOnBlack>
          </StyleTitle>
          <div>{children}</div>
        </StyleContentWrapper>
        <Burger
          onClick={() => {
            this.toggleSidebar()
          }}
          active={isSidebarActive}
          isDarkMode={isDarkMode}
        />
        <Sidebar active={isSidebarActive} />
        <SocialMedia isDarkMode={isDarkMode} />
      </StyleWrapper>
    )
  }
}

export default PostLayout
