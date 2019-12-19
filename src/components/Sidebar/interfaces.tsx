interface MenuLink {
  name: string
  path: string
}

interface ImageQuery {
  id: string
  childImageSharp: {
    fixed: any
  }
}

export interface IPropsSidebar {
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