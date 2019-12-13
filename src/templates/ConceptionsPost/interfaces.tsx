import { FluidObject } from 'gatsby-image'

interface IPropsConceptionsPost {
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
    }
  }
}

export { IPropsConceptionsPost }
