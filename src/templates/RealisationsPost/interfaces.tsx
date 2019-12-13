import { FluidObject } from 'gatsby-image'

interface IPropsProductPost {
  pageContext: {
    name: string
    parentPath: string
    slug: string
    content: {
      childContentfulRichText: {
        html: string
      }
    }
    gallery: FluidObject[]
    mainImage: FluidObject
    next: {
      name: string
      slug: string
      path: string
    }
  }
}

export { IPropsProductPost }
