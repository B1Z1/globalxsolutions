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

/**
 * Import Styles
 */
import {
  StyleWrapper,
  StyleContentWrapper,
  StyleDash,
  StyleLinkWrapper,
  StyleCircle,
} from './style'
import { GlobalStyle } from '../../shared/styles/index'

/**
 * Import Interfaces
 */
import { State } from './interfaces'

class MainLayout extends React.Component<{}, State> {
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
    const { children } = this.props
    const { isSidebarActive } = this.state

    return (
      <StyleWrapper>
        <GlobalStyle />
        <StyleContentWrapper>
          <Circle top="0" left="24px" withDot={false} />
          <StyleDash></StyleDash>
          <div>{children}</div>
          <StyleLinkWrapper>
            <Circle withDot={true} top="50%" left="8.5px" />
            <Circle withDot={true} top="150%" left="50%" />
            <Link to="/what-we-do">Czym się zajmujemy</Link>
          </StyleLinkWrapper>
        </StyleContentWrapper>
        <Burger
          onClick={() => {
            this.toggleSidebar()
          }}
          active={isSidebarActive}
        />
        <Sidebar active={isSidebarActive} />
      </StyleWrapper>
    )
  }
}

export default MainLayout
