import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

import { IPropsStyleClassicInput } from './interface'

const StyleInput = styled.input`
  display: block;
  width: 280px;
  margin-bottom: 32px;
  margin-left: 8px;
  padding-left: 24px;
  padding-bottom: 4px;
  border: none;
  outline: none;
  border-bottom: 1px solid
    ${(props: IPropsStyleClassicInput) =>
      props.isValide ? styleVariables.colors.main2 : `red`};
  background-color: transparent;
  color: ${styleVariables.colors.main2};
  font-size: ${styleVariables.fontSizes.mini};
  transition: border-bottom;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
`

const StyleInputWrapper = styled.div`
  position: relative;
`

const StyleAlertWrapper = styled.div`
  * {
    background-color: ${(props: IPropsStyleClassicInput) =>
      props.isValide ? '' : `red`};
  }
`

export { StyleInput, StyleInputWrapper, StyleAlertWrapper }
