import React from 'react'
import { Link } from 'gatsby'

import Circle from '../../components/Circle'
import Dash from '../../components/Dash'
import TextOnBlack from '../../components/TextOnBlack'

import { StyleLinkWrapper, StyleTitle } from './style'

import { IStateMain, IPropsMain, IDashesData, ICirclesData } from './interfaces'
import { IPropsCircle } from '../../components/Circle/interface'
import { IPropsDash } from '../../components/Dash/interface'

import WrapperLayout from '../Wrapper'

class MainLayout extends React.Component<IPropsMain, IStateMain> {
  generateCircles(data: IPropsCircle[]) {
    return data.map((el: IPropsCircle) => {
      const { isDarkMode, top, right, bottom, left, withDot } = el

      return (
        <Circle
          isDarkMode={isDarkMode}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          withDot={withDot}
        />
      )
    })
  }

  generateDashes(data: IPropsDash[]) {
    return data.map((el: IPropsDash) => {
      const { dashHeight, dashWidth, isDarkMode, top, right, bottom, left } = el

      return (
        <Dash
          isDarkMode={isDarkMode}
          dashWidth={dashWidth}
          dashHeight={dashHeight}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
        />
      )
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
    const circlesData: ICirclesData = {
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
    const dashesData: IDashesData = {
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
      main: this.generateCircles(circlesData.main),
      links: this.generateCircles(circlesData.link),
    }
    const $Dashes = {
      main: this.generateDashes(dashesData.main),
      links: this.generateDashes(dashesData.link),
    }

    return (
      <WrapperLayout isDarkMode={isDarkMode}>
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
        <div>{children}</div>
        <StyleLinkWrapper>
          {$Dashes.links}
          {$Circles.links}
          <Link to={linkTo}>{linkText}</Link>
        </StyleLinkWrapper>
      </WrapperLayout>
    )
  }
}

export default MainLayout
