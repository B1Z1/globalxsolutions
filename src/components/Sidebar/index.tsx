import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Props } from './interfaces'

import {
  StyleLogos,
  StyleSidebar,
  StyleLogoElement,
  StyleNavigation,
  StyleNavigationList,
  StyleNavigationElement,
  StyleNavigationLink,
} from './styled'

class Sidebar extends React.Component<Props, {}> {
  generateImages(elements) {
    return elements.map(image => (
      <StyleLogoElement key={image.id}>
        <Img fixed={image.childImageSharp.fixed} />
      </StyleLogoElement>
    ))
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
      //@ts-ignore
      <StyleSidebar active={active}>
        <StyleLogos>{$Images}</StyleLogos>
        <StyleNavigation>
          <StyleNavigationList>{$Links}</StyleNavigationList>
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
            childImageSharp {
              fixed {
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
