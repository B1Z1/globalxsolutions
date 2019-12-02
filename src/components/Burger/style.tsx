import styled from 'styled-components'

import { styleVariables } from '../../shared/styles/variables'

const StyleIcon = styled.svg`
  position: fixed;
  top: 32px;
  right: 24px;
  width: 24px;
  height: 32px;
  fill: ${props =>
    //@ts-ignore
    props.active ? styleVariables.colors.operate : styleVariables.colors.main};
  cursor: pointer;
  z-index: 10;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    display: none;
  }
`

export { StyleIcon }
