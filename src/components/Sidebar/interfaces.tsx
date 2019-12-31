import { FixedObject } from 'gatsby-image'

interface MenuLink {
  name: string
  path: string
}

interface ImageQuery {
  id: string
  name: string
  childImageSharp: {
    fixed: FixedObject
  }
}

interface IPropsSidebar {
  data: {
    site: {
      siteMetadata: {
        menuLinks: MenuLink[]
      }
    }
    images: {
      nodes: ImageQuery[]
    }
  }
  active: boolean
}

interface IStylePropsSidebar {
  active: boolean
}

export { IPropsSidebar, IStylePropsSidebar }
