import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StylePostWrapper = styled.div`
  position: relative;
`

const StyleContentWrapper = styled.div`
  position: relative;
  padding-bottom: 32px;
`

const StyleGalleryWrapper = styled.div``

const StyleImage = styled.div`
  position: relative;
  width: auto;
  margin-top: 64px;
  &:first-of-type {
    margin-top: 0;
  }
`

export {
  StylePostWrapper,
  StyleContentWrapper,
  StyleImage,
  StyleGalleryWrapper,
}
