import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import TextOnBlack from '../TextOnBlack'
import { IPropsSidebar, IMenuLink } from './interfaces'

import {
  StyleLogos,
  StyleSidebar,
  StyleLogoElement,
  StyleNavigation,
  StyleNavigationElement,
  StyleNavigationLink,
  StyleSecondLevelMenu,
  StyleSecondLevelMenuElement,
} from './styled'

class Sidebar extends React.Component<IPropsSidebar, {}> {
  generateImages(elements) {
    return elements.map(image => {
      const { name } = image
      const GLOBALX_LOGO_NAME = 'GlobalXSolutions'
      const SAMSUNG_LOGO_NAME = 'samsung_inkubator_logo'
      if (name === GLOBALX_LOGO_NAME)
        return (
          <StyleLogoElement key={image.id}>
            <Link to="/">
              <Img fixed={image.childImageSharp.fixed} />
            </Link>
          </StyleLogoElement>
        )
      else if (name === SAMSUNG_LOGO_NAME)
        return (
          <StyleLogoElement key={image.id}>
            <Link to="/events/inkubacja-w-samsung">
              <Img fixed={image.childImageSharp.fixed} />
            </Link>
          </StyleLogoElement>
        )
      return (
        <StyleLogoElement key={image.id}>
          <Img fixed={image.childImageSharp.fixed} />
        </StyleLogoElement>
      )
    })
  }

  generateNavigationSecondLevel(children) {
    let $childrenElements = children.map((childElement, index) => (
      <StyleSecondLevelMenuElement key={index}>
        <TextOnBlack
          isDarkMode={false}
          withMargin={false}
          animationToggle={true}
        >
          <Link to={childElement.path}>{childElement.name}</Link>
        </TextOnBlack>
      </StyleSecondLevelMenuElement>
    ))

    return (
      <StyleSecondLevelMenu>
        <ul>{$childrenElements}</ul>
      </StyleSecondLevelMenu>
    )
  }

  generateLinks(links: IMenuLink[]) {
    return links.map((link: IMenuLink, index) => {
      const { path, name } = link
      const children = link?.children
      let $childrenElementsWrapper =
        children !== null && children.length > 0
          ? this.generateNavigationSecondLevel(children)
          : []

      return (
        <StyleNavigationElement key={index}>
          <Link to={path}>
            <StyleNavigationLink>{name}</StyleNavigationLink>
          </Link>
          {$childrenElementsWrapper}
        </StyleNavigationElement>
      )
    })
  }

  render() {
    const { data, active } = this.props
    const $Links = this.generateLinks(data.site.siteMetadata.menuLinks)
    const $Images = this.generateImages(data.images.nodes)

    return (
      <StyleSidebar active={active}>
        <StyleLogos>{$Images}</StyleLogos>
        <StyleNavigation>
          <ul>{$Links}</ul>
        </StyleNavigation>
      </StyleSidebar>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        images: allFile(filter: { relativeDirectory: { eq: "Logos" } }) {
          nodes {
            id
            name
            childImageSharp {
              fixed(width: 164, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        site {
          siteMetadata {
            menuLinks {
              name
              path
              children {
                name
                path
              }
            }
          }
        }
      }
    `}
    render={data => <Sidebar data={data} {...props} />}
  />
)
