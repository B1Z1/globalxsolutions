import styled from 'styled-components'

import { styleVariables } from '../../shared/styles/variables'
import { IBurgerProps } from './interfaces'

const StyleIcon = styled.svg`
  position: fixed;
  top: 32px;
  right: 24px;
  width: 24px;
  height: 32px;
  fill: ${(props: IBurgerProps) =>
    props.active || props.isDarkMode
      ? styleVariables.colors.operate
      : styleVariables.colors.main};
  cursor: pointer;
  z-index: 30;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    display: none;
  }
`

export { StyleIcon }
