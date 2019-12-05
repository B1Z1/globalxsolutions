import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'
import { StyleProps } from './interfaces'

const StyleTitle = styled.h3`
  display: inline-block;
  color: ${styleVariables.colors.main2};
  background-color: ${styleVariables.colors.main};
  margin-top: 0;
  margin-bottom: ${(props: StyleProps) => (props.withMargin ? '32px' : '0')};
  padding-right: 32px;
`

export { StyleTitle }
