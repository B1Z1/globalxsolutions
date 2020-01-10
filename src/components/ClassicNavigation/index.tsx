import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import ClassicSecondLevelMenu from '../ClassicSecondLevelMenu'
import { IPropsClassicNavigation } from './interface'
import {
  StyleNavigation,
  StyleNavigationElement,
  StyleNavigationLink,
  StyleSecondLevelMenuWrapper,
} from './style'

class ClassicNavigation extends React.Component<IPropsClassicNavigation, {}> {
  generateLink(
    key: string | number,
    path: string,
    name: string,
    secondLevelMenuElements: { name: string; path: string }[] = []
  ): ReactElement {
    const $SecondLevelMenu = this.isSecondLevelNavigationMenuExist(
      secondLevelMenuElements
    ) ? (
      <StyleSecondLevelMenuWrapper>
        <ClassicSecondLevelMenu elements={secondLevelMenuElements} />
      </StyleSecondLevelMenuWrapper>
    ) : null

    return (
      <StyleNavigationElement key={key}>
        <Link to={path}>
          <StyleNavigationLink>{name}</StyleNavigationLink>
        </Link>
        {$SecondLevelMenu}
      </StyleNavigationElement>
    )
  }

  isSecondLevelNavigationMenuExist(
    elements: { name: string; path: string }[] | null
  ): boolean {
    return elements !== null && elements.length > 0
  }

  render() {
    const $Menu = this.props.elements.map((element, index) =>
      this.generateLink(index, element.path, element.name, element.children)
    )

    return (
      <StyleNavigation>
        <ul>{$Menu}</ul>
      </StyleNavigation>
    )
  }
}

export default ClassicNavigation
