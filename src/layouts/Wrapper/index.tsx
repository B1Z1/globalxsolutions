import React from 'react'
import { Link } from 'gatsby'

import Sidebar from '../../components/Sidebar'
import Burger from '../../components/Burger'
import SocialMedia from '../../components/SocialMedia'
import Circle from '../../components/Circle'
import Dash from '../../components/Dash'
import TextOnBlack from '../../components/TextOnBlack'
import Preloader from '../../components/Preloader'
import Particles from '../../components/Particles'

import {
  StyleWrapper,
  StyleContentWrapper,
  StyleLinkWrapper,
  StyleTitle,
} from './style'

import { GlobalStyle } from '../../shared/styles/index'

import {
  IStateWrapper,
  IPropsWrapper,
  ICirclesDataWrapper,
  IDashesDataWrapper,
} from './interfaces'

class WrapperLayout extends React.Component<IPropsWrapper, IStateWrapper> {
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
    const {
      children,
      linkText,
      linkTo,
      title,
      titleWithMargin,
      isDarkMode,
    } = this.props
    const { isSidebarActive } = this.state
    const circlesData: ICirclesDataWrapper = {
      main: [
        {
          isDarkMode: isDarkMode,
          withDot: false,
          top: '0',
          left: '24px',
        },
      ],
      link: [
        { isDarkMode: isDarkMode, withDot: true, top: '50%', left: '8.5px' },
        { isDarkMode: isDarkMode, withDot: true, top: '150%', left: '50%' },
      ],
    }
    const dashesData: IDashesDataWrapper = {
      main: [
        {
          top: '0',
          left: '0',
          dashWidth: '1px',
          dashHeight: 'calc(100% - 13px)',
          isDarkMode: isDarkMode,
        },
        {
          top: '0',
          left: '0',
          dashWidth: '24px',
          dashHeight: '1px',
          isDarkMode: isDarkMode,
        },
        {
          top: '0',
          left: '32px',
          dashWidth: '1px',
          dashHeight: '24px',
          isDarkMode: isDarkMode,
        },
      ],
      link: [
        {
          isDarkMode: isDarkMode,
          top: '50%',
          left: '-8px',
          dashWidth: '18px',
          dashHeight: '1px',
        },
        {
          isDarkMode: isDarkMode,
          top: '25%',
          left: '16px',
          dashWidth: '1px',
          dashHeight: '126%',
        },
        {
          isDarkMode: isDarkMode,
          bottom: '-14px',
          left: '16px',
          dashWidth: '45%',
          dashHeight: '1px',
        },
      ],
    }
    const $Circles = {
      main: circlesData.main.map((el, index) => <Circle key={index} {...el} />),
      links: circlesData.link.map((el, index) => (
        <Circle key={index} {...el} />
      )),
    }
    const $Dashes = {
      main: dashesData.main.map((el, index) => <Dash key={index} {...el} />),
      links: dashesData.link.map((el, index) => <Dash key={index} {...el} />),
    }

    const $LinkWrapper =
      linkTo && linkText ? (
        <StyleLinkWrapper>
          {$Dashes.links}
          {$Circles.links}
          <Link to={linkTo}>{linkText}</Link>
        </StyleLinkWrapper>
      ) : (
        <Circle isDarkMode={isDarkMode} withDot={true} bottom="0" left="-8px" />
      )

    return (
      <StyleWrapper isDarkMode={isDarkMode}>
        <GlobalStyle />
        {!sessionStorage.getItem('preload') ? <Preloader /> : null}
        <Particles />
        <StyleContentWrapper>
          {$Circles.main}
          {$Dashes.main}
          <StyleTitle>
            <TextOnBlack
              isDarkMode={isDarkMode}
              paddingRight="32px"
              withMargin={titleWithMargin}
            >
              {title}
            </TextOnBlack>
          </StyleTitle>
          {children}
          {$LinkWrapper}
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

export default WrapperLayout
