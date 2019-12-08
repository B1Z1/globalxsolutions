import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

import { IPropsDash } from './interface'

const StyleDash = styled.div`
  position: absolute;
  top: ${(props: IPropsDash) => props.top};
  right: ${(props: IPropsDash) => props.right};
  bottom: ${(props: IPropsDash) => props.bottom};
  left: ${(props: IPropsDash) => props.left};
  width: ${(props: IPropsDash) => props.dashWidth};
  height: ${(props: IPropsDash) => props.dashHeight};
  background-color: ${styleVariables.colors.main};
`

export { StyleDash }
