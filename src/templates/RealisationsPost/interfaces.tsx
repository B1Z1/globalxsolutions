import { FluidObject } from 'gatsby-image'

interface IPropsProductPost {
  pageContext: {
    title: string
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
      title: string
      slug: string
      path: string
    }
  }
}

export { IPropsProductPost }
