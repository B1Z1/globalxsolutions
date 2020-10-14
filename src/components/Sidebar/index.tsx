import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { IPropsSidebar } from './interfaces'
import ClassicNavigation from '../ClassicNavigation'

import { StyleLogos, StyleSidebar, StyleLogoElement } from './styled'

class Sidebar extends React.Component<IPropsSidebar, {}> {
  GLOBALXSOLUTIONS_PATH = '/'
  SAMSUNG_INCUBATION_PATH = '/events/inkubacja-w-samsung'
  GLOBALX_LOGO_NAME = 'GlobalXSolutions'
  SAMSUNG_LOGO_NAME = 'samsung_inkubator_logo'

  generateImages(elements) {
    return elements.map(image => {
      const { name } = image
      const fixedImage: FixedObject = image.childImageSharp.fixed
      let $Image, path: string

      if (name === this.GLOBALX_LOGO_NAME) path = this.GLOBALXSOLUTIONS_PATH
      else if (name === this.SAMSUNG_LOGO_NAME)
        path = this.SAMSUNG_INCUBATION_PATH

      if (path)
        $Image = (
          <Link to={path}>
            <Img fixed={fixedImage} />
          </Link>
        )
      else $Image = <Img fixed={fixedImage} />
      return <StyleLogoElement key={image.id}>{$Image}</StyleLogoElement>
    })
  }

  render() {
    const { data, active } = this.props
    const linkElements = data.site.siteMetadata.menuLinks
    const $Images = this.generateImages(data.images.nodes)

    return (
      <StyleSidebar active={active}>
        <StyleLogos>{$Images}</StyleLogos>
        <ClassicNavigation elements={linkElements} />
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
              fullPath
              children {
                name
                path
                fullPath
              }
            }
          }
        }
      }
    `}
    render={data => <Sidebar data={data} {...props} />}
  />
)
