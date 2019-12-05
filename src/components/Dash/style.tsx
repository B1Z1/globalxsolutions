import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

import { StyleProps } from './interface'

const StyleDash = styled.div`
  position: absolute;
  top: ${(props: StyleProps) => props.top};
  right: ${(props: StyleProps) => props.right};
  bottom: ${(props: StyleProps) => props.bottom};
  left: ${(props: StyleProps) => props.left};
  width: ${(props: StyleProps) => props.dashWidth};
  height: ${(props: StyleProps) => props.dashHeight};
  background-color: ${styleVariables.colors.main};
`

export { StyleDash }
