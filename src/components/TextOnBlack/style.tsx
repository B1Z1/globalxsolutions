import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'
import { IPropsTextOnBlack } from './interfaces'

const StyleTextOnBlack = styled.span`
  display: inline-block;
  color: ${styleVariables.colors.main2};
  background-color: ${styleVariables.colors.main};
  margin-top: 0;
  margin-bottom: ${(props: IPropsTextOnBlack) =>
    props.withMargin ? '32px' : '0'};
  padding-right: ${(props: IPropsTextOnBlack) => props.paddingRight};
`

export { StyleTextOnBlack }