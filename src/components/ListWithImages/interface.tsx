import { FluidObject } from 'gatsby-image'

interface IElementWithImage {
  linkText: string
  slug: string
  mainImage: {
    fluid: FluidObject
  }
}

interface IPropsListWithImages {
  elements: IElementWithImage[]
  parentRoot: string
}

export { IPropsListWithImages, IElementWithImage }
