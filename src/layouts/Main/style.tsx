import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StyleWrapper = styled.div`
  position: relative;
  padding: 16px;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    padding: 32px;
    padding-bottom: 128px;
  }
`

const StyleContentWrapper = styled.main`
  position: relative;
  max-width: 736px;
  margin-top: 64px;
  padding-top: 24px;
  padding-left: 8px;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    margin-top: 298px;
    margin-left: 120px;
  }
`

const StyleLinkWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 64px;
  padding-left: 32px;
`

const StyleTitle = styled.h3`
  margin-bottom: 0;
`

export { StyleWrapper, StyleContentWrapper, StyleLinkWrapper, StyleTitle }
