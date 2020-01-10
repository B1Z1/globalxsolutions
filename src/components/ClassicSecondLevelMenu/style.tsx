import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StyleWrapper = styled.nav`
  position: relative;
  padding: 16px;
  background-color: ${styleVariables.colors.operate};
`

const StyleElement = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${styleVariables.colors.main2};
`

export { StyleWrapper, StyleElement }
