import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { IPropsSidebar } from './interfaces'

import {
  StyleLogos,
  StyleSidebar,
  StyleLogoElement,
  StyleNavigation,
  StyleNavigationElement,
  StyleNavigationLink,
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

  generateLinks(links) {
    return links.map((link, index) => (
      <StyleNavigationElement key={index}>
        <Link to={link.path}>
          <StyleNavigationLink>{link.name}</StyleNavigationLink>
        </Link>
      </StyleNavigationElement>
    ))
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
            }
          }
        }
      }
    `}
    render={data => <Sidebar data={data} {...props} />}
  />
)
