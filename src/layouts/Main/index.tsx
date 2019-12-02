import React from 'react'

import Sidebar from '../../components/Sidebar'
import Burger from '../../components/Burger'

import { StyledWrapper } from './style'
import { GlobalStyle } from '../../shared/styles/index'

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
      <StyledWrapper>
        <GlobalStyle />
        <div>{children}</div>
        <Burger
          onClick={() => {
            this.toggleSidebar()
          }}
          active={isSidebarActive}
        />
        <Sidebar active={isSidebarActive} />
      </StyledWrapper>
    )
  }
}

export default MainLayout
