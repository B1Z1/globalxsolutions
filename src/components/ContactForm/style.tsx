import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StyleButton = styled.button`
  display: inline-block;
  padding: 0;
  padding-right: 16px;
  border: none;
  outline: none;
  background-color: ${styleVariables.colors.operate};
  color: ${styleVariables.colors.main2};
  cursor: pointer;
`

export { StyleButton }
