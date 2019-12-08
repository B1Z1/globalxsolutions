import styled from 'styled-components'
import { styleVariables } from '../../variables'

const StyleListElementWithDots = styled.li`
  position: relative;
  padding-left: 32px;
  margin-bottom: 16px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    background-color: ${styleVariables.colors.main};
    transform: translate(0, -50%);
  }
  &:before {
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  &:after {
    left: 12px;
    width: 0;
    height: 1px;
    animation: lineFade 0.3s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  }
  @keyframes lineFade {
    0% {
      width: 0;
    }
    100% {
      width: 16px;
    }
  }
`

export { StyleListElementWithDots }
