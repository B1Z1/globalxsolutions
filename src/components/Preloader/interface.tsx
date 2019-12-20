import { FluidObject } from 'gatsby-image'

interface IPropsPreloader {
  data: {
    globalXLogo: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    parpLogo: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    infotechLogo: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

interface IStatePreloader {
  isDone: boolean
  slides: boolean[]
  activeSlidesWrapper: boolean
}

interface IPropsStylePreloader {
  hidden?: boolean
  sizeLogo?: string
  isDone?: boolean
  activeSlidesWrapper?: boolean
}

export { IPropsPreloader, IPropsStylePreloader, IStatePreloader }
