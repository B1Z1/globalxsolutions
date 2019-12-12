import React from 'react'

import Sidebar from '../../components/Sidebar'
import Burger from '../../components/Burger'
import SocialMedia from '../../components/SocialMedia'

import { StyleWrapper, StyleContentWrapper } from './style'

import { GlobalStyle } from '../../shared/styles/index'

import { IStateMain, IPropsMain } from './interfaces'

class WrapperLayout extends React.Component<IPropsMain, IStateMain> {
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
    const { children, isDarkMode } = this.props
    const { isSidebarActive } = this.state

    return (
      <StyleWrapper isDarkMode={isDarkMode}>
        <GlobalStyle />
        <StyleContentWrapper>{children}</StyleContentWrapper>
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

export default WrapperLayout
