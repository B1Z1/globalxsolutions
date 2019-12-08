import styled from 'styled-components'

import { styleVariables } from '../../shared/styles/variables'

const StyleMessage = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
`

const StyleInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${styleVariables.colors.main2};
`

export { StyleMessage, StyleInput }
