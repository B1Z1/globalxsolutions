import { FluidObject } from 'gatsby-image'

interface IPropsProductPost {
  pageContext: {
    title: string
    parentPath: string
    slug: string
    content: {
      json: any
    }
    gallery: FluidObject[]
    mainImage: FluidObject
    next: {
      title: string
      slug: string
      url: string
    }
  }
}

export { IPropsProductPost }
