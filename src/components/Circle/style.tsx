import styled from 'styled-components'

import { styleVariables } from '../../shared/styles/variables'

import { PropsStyleCircles } from './interface'

const StyleCircle = styled.div`
  position: absolute;
  top: ${(props: PropsStyleCircles) => props.top};
  left: ${(props: PropsStyleCircles) => props.left};
  width: 16px;
  height: 16px;
  background-color: ${styleVariables.colors.main};
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 4;
  ${(props: PropsStyleCircles) => {
    if (props.withDot)
      return `&:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        background-color: ${styleVariables.colors.main2};
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }`
  }}
`

export { StyleCircle }
