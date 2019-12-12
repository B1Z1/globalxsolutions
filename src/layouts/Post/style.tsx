import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StyleContentWrapper = styled.main`
  position: relative;
  max-width: 100%;
  margin-top: 64px;
  padding-top: 24px;
  padding-left: 8px;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    margin-top: 298px;
    margin-left: 120px;
    max-width: 50%;
  }
`

const StyleTitle = styled.h3`
  margin-bottom: 0;
`

const StyleWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 128px;
  padding-left: 16px;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    padding-top: 32px;
    padding-right: 32px;
    padding-left: 32px;
  }
`

export { StyleWrapper, StyleContentWrapper, StyleTitle }
