import { FluidObject } from 'gatsby-image'

interface IElementWithImage {
  name: string
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
