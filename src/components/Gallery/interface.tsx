import { FluidObject } from 'gatsby-image'

interface IPropsGallery {
  elements: {
    fluid: FluidObject
    alt: string
  }[]
}

interface IStateGallery {
  currentFluid: FluidObject | null
  currentAlt: string
  currentID: number | null
  animation: string
}

interface IStyleProps {
  type?: string
  animation?: string
}

export { IPropsGallery, IStyleProps, IStateGallery }
