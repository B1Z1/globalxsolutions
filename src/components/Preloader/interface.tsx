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
  isEnd: boolean
  slides: boolean[]
}

interface IPropsStylePreloader {
  hidden?: boolean
  biggerLogo?: boolean
  isEnd?: boolean
}

export { IPropsPreloader, IPropsStylePreloader, IStatePreloader }
