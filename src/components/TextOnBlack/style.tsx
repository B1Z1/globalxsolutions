import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'
import { IPropsTextOnBlack } from './interfaces'

const StyleTextOnBlack = styled.span`
  display: inline-block;
  position: relative;
  color: ${styleVariables.colors.main2};
  background-color: ${(props: IPropsTextOnBlack) =>
    props.isDarkMode
      ? styleVariables.colors.operate
      : styleVariables.colors.main};
  margin-top: 0;
  margin-bottom: ${(props: IPropsTextOnBlack) =>
    props.withMargin ? '32px' : '0'};
  padding-right: ${(props: IPropsTextOnBlack) => props.paddingRight};
  span {
    display: inline-block;
    position: relative;
    z-index: 3;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props: IPropsTextOnBlack) =>
      props.isDarkMode
        ? styleVariables.colors.main
        : styleVariables.colors.main2};
    animation: toggleLine 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
  }
  ${(props: IPropsTextOnBlack) => {
    const { animationToggle } = props
    if (animationToggle)
      return `
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 100%;
        background-color: ${styleVariables.colors.operate};
        transition: width;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        z-index: 0;
      }
      &:hover {
        &:after {
          width: 100%;          
        }
      }
    `
  }}
  @keyframes toggleLine {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
`

export { StyleTextOnBlack }
