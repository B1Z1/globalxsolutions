import { FluidObject } from 'gatsby-image'

interface IPropsBottomLogo {
  data: {
    parpLogo: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

export { IPropsBottomLogo }
