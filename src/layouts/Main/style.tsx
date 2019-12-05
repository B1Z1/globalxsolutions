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
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    background-color: ${styleVariables.colors.main};
  }
  &:before {
    left: 0;
    width: 24px;
    height: 1px;
  }
`

const StyleDash = styled.div`
  position: absolute;
  top: 0;
  left: 32px;
  width: 1px;
  height: 24px;
  background-color: ${styleVariables.colors.main};
`

const StyleLinkWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 64px;
  padding-left: 32px;
  transform: translateY(50%);
  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: ${styleVariables.colors.main};
  }
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -9px;
    width: 18px;
    height: 1px;
    transform: translateY(-50%);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 16px;
    width: 1px;
    height: 24px;
    transform: translateY(80%);
  }
`

export { StyleWrapper, StyleContentWrapper, StyleDash, StyleLinkWrapper }
