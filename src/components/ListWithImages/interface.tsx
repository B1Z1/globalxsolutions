import { FluidObject } from 'gatsby-image'

interface IProductElement {
  name: string
  slug: string
  mainImage: {
    fluid: FluidObject
  }
}

interface IPropsListWithImages {
  elements: IProductElement[]
  parentRoot: string
}

export { IPropsListWithImages, IProductElement }
