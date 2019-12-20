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

const StyleInputWrapper = styled.div`
  position: relative;
`

const StyleInputPlaceholder = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: ${styleVariables.colors.main2};
  opacity: 0.32;
`

export { StyleMessage, StyleInput, StyleInputWrapper, StyleInputPlaceholder }
