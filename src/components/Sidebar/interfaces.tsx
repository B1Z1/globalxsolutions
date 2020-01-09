import { FixedObject } from 'gatsby-image'

interface IMenuLink {
  name: string
  path?: string
  children?: {
    name: string
    path: string
  }[]
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
        menuLinks: IMenuLink[]
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

export { IPropsSidebar, IStylePropsSidebar, IMenuLink }
