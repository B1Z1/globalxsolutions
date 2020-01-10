import React from 'react'
import { Link } from 'gatsby'
import { IPropsClassicSecondLevelMenu } from './interface'
import { StyleElement, StyleWrapper } from './style'

class ClassicSecondLevelMenu extends React.Component<
  IPropsClassicSecondLevelMenu,
  {}
> {
  generateLink(key, path, name) {
    return (
      <StyleElement key={key}>
        <Link to={path}>{name}</Link>
      </StyleElement>
    )
  }

  render() {
    const $Elements = this.props.elements.map((element, index) =>
      this.generateLink(index, element.path, element.name)
    )

    return <StyleWrapper>{$Elements}</StyleWrapper>
  }
}

export default ClassicSecondLevelMenu
