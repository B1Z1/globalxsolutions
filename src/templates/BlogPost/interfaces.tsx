import { FluidObject } from 'gatsby-image'

interface IPropsBlogPost {
  pageContext: {
    title: string
    parentPath: string
    slug: string
    excerption: string
    content: {
      childContentfulRichText: {
        html: string
      }
    }
    next: {
      name: string
      slug: string
      path: string
    }
  }
}

export { IPropsBlogPost }
