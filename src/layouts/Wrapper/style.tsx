import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

import { IPropsStyleWrapper } from './interfaces'

const StyleTitle = styled.h3`
  margin-bottom: 0;
`

const StyleLinkWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 64px;
  padding-left: 32px;
`

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

const StyleWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 128px;
  padding-left: 16px;
  overflow-x: hidden;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    padding-top: 32px;
    padding-right: 32px;
    padding-left: 32px;
  }
  ${(props: IPropsStyleWrapper) => {
    const { isDarkMode } = props
    if (isDarkMode)
      return `
        background-color: ${styleVariables.colors.main};
        ${StyleContentWrapper} {
          color: ${styleVariables.colors.main2};
        }
      `
  }}
`

export { StyleWrapper, StyleContentWrapper, StyleLinkWrapper, StyleTitle }
