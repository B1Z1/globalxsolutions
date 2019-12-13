import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StylePostWrapper = styled.div`
  position: relative;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    display: flex;
  }
`

const StyleContentWrapper = styled.div`
  position: relative;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    flex: 0 0 60%;
    max-width: 60%;
    padding-right: 16px;
  }
`

const StyleGalleryWrapper = styled.div`
  position: relative;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    flex: 0 0 40%;
    max-width: 40%;
  }
`

const StyleImage = styled.div`
  margin-bottom: 128px;
  &:last-of-type{
    margin-bottom: 0;
  }
`

export {
  StylePostWrapper,
  StyleContentWrapper,
  StyleGalleryWrapper,
  StyleImage,
}
