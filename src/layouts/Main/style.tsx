import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StyleWrapper = styled.div`
  position: relative;
  padding: 16px;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    padding: 32px;
  }
`

const StyleContentWrapper = styled.main`
  position: relative;
  max-width: 736px;
  margin-top: 298px;
  padding-top: 24px;
  padding-left: 8px;
  border-left: 1px solid ${styleVariables.colors.main};
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    margin-left: 120px;
  }
`

const StyleLinkWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 64px;
  padding-left: 32px;
  transform: translateY(50%);
`

export { StyleWrapper, StyleContentWrapper, StyleLinkWrapper }
