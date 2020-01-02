import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StyleLogoWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 1%;
  width: 98%;
  z-index: 900;
  @media only screen and (min-width: ${styleVariables.breakPoints.sm}) {
    right: 20%;
    width: 60%;
  }
  @media only screen and (min-width: ${styleVariables.breakPoints.md}) {
    width: 512px;
    bottom: 32px;
    right: 32px;
  }
`
export { StyleLogoWrapper }
