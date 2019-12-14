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
  private circlesData: ICirclesDataWrapper = {
    main: [
      {
        withDot: false,
        top: '0',
        left: '24px',
      },
    ],
    link: [
      { withDot: true, top: '50%', left: '8.5px' },
      { withDot: true, top: '150%', left: '50%' },
    ],
  }
  private dashesData: IDashesDataWrapper = {
    main: [
      {
        top: '0',
        left: '0',
        dashWidth: '1px',
        dashHeight: 'calc(100% - 13px)',
      },
      {
        top: '0',
        left: '0',
        dashWidth: '24px',
        dashHeight: '1px',
      },
      {
        top: '0',
        left: '32px',
        dashWidth: '1px',
        dashHeight: '24px',
      },
    ],
    link: [
      {
        top: '50%',
        left: '-8px',
        dashWidth: '18px',
        dashHeight: '1px',
      },
      {
        top: '25%',
        left: '16px',
        dashWidth: '1px',
        dashHeight: '126%',
      },
      {
        bottom: '-14px',
        left: '16px',
        dashWidth: '45%',
        dashHeight: '1px',
      },
    ],
  }

  constructor(props) {
    super(props)

    this.state = {
      isSidebarActive: false,
      isInSessionStorage: false,
    }
  }

  toggleSidebar() {
    this.setState({
      isSidebarActive: !this.state.isSidebarActive,
    })
  }

  componentDidMount() {
    this.setState({
      isInSessionStorage: Boolean(sessionStorage.getItem('preload')),
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
    const { isSidebarActive, isInSessionStorage } = this.state
    const $Circles = {
      main: this.circlesData.main.map((el, index) => (
        <Circle key={index} isDarkMode={isDarkMode} {...el} />
      )),
      links: this.circlesData.link.map((el, index) => (
        <Circle key={index} {...el} />
      )),
    }
    const $Dashes = {
      main: this.dashesData.main.map((el, index) => (
        <Dash isDarkMode={isDarkMode} key={index} {...el} />
      )),
      links: this.dashesData.link.map((el, index) => (
        <Dash isDarkMode={isDarkMode} key={index} {...el} />
      )),
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

    const $Preloader = isInSessionStorage ? null : <Preloader />

    return (
      <StyleWrapper isDarkMode={isDarkMode}>
        <GlobalStyle />
        {$Preloader}
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
