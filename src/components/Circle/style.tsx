import styled from 'styled-components'

import { styleVariables } from '../../shared/styles/variables'

import { IPropsCircles } from './interface'

const StyleCircle = styled.div`
  position: absolute;
  top: ${(props: IPropsCircles) => props.top};
  right: ${(props: IPropsCircles) => props.right};
  bottom: ${(props: IPropsCircles) => props.bottom};
  left: ${(props: IPropsCircles) => props.left};
  width: 16px;
  height: 16px;
  background-color: ${(props: IPropsCircles) =>
    props.isDarkMode
      ? styleVariables.colors.main2
      : styleVariables.colors.main};
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 4;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${styleVariables.colors.operate};
  }
  ${(props: IPropsCircles) => {
    if (props.withDot)
      return `&:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        background-color: ${
          props.isDarkMode
            ? styleVariables.colors.main
            : styleVariables.colors.main2
        };
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }`
  }}
`

export { StyleCircle }
