import React from 'react'
import { Link } from 'gatsby'

import Circle from '../Circle'
import Dash from '../Dash'
import TextOnBlack from '../TextOnBlack'

import { IPropsListBlog } from './interface'
import { StyleTitle, StyleContent } from './style'

import { StyleListElementWithDots } from '../../shared/styles/components/List'

class ListBlog extends React.Component<IPropsListBlog, {}> {
  render() {
    const isDarkMode = false
    const { elements } = this.props
    const $Elements = elements.map((element, index) => (
      <StyleListElementWithDots
        animateIt={true}
        delay={index * 0.3}
        dotPosition="start"
        key={index}
        style={{ marginBottom: '64px' }}
      >
        <Link to={element.link} style={{ display: 'inline-block' }}>
          <StyleTitle>
            <Dash
              isDarkMode={isDarkMode}
              dashWidth="16px"
              dashHeight="1px"
              top="50%"
              right="-16px"
            />
            <Dash
              isDarkMode={isDarkMode}
              dashWidth="1px"
              dashHeight="16px"
              top="70%"
              right="-25px"
            />
            <Circle
              isDarkMode={isDarkMode}
              top="50%"
              right="-32px"
              withDot={true}
            />
            <TextOnBlack
              isDarkMode={isDarkMode}
              withMargin={false}
              paddingRight="16px"
            >
              {element.title}
            </TextOnBlack>
          </StyleTitle>
          <StyleContent>{element.excerption}...</StyleContent>
          <TextOnBlack
            isDarkMode={isDarkMode}
            animationToggle={true}
            withMargin={false}
            paddingRight="24px"
          >
            Czytaj dalej
          </TextOnBlack>
        </Link>
      </StyleListElementWithDots>
    ))

    return <ul>{$Elements}</ul>
  }
}

export default ListBlog
