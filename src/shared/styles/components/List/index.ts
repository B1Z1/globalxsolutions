import styled from 'styled-components'
import { styleVariables } from '../../variables'

interface IStyleListProps {
  dotPosition: string
  animateIt?: boolean
  delay?: number
}

const StyleListElementWithDots = styled.li`
  position: relative;
  padding-left: 32px;
  margin-bottom: 16px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: ${(props: IStyleListProps) =>
      props.dotPosition === 'start' ? '2px' : '50%'};
    background-color: ${styleVariables.colors.main};
    transform: translate(0, -50%);
  }
  &:before {
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    ${(props: IStyleListProps) => {
      if (props.animateIt)
        return `animation: animateIt 0.6s ease-in-out infinite;`
    }}
    ${(props: IStyleListProps) => {
      if (props.delay) return `animation-delay: ${props.delay}s`
    }}
  }
  &:after {
    left: 12px;
    width: 0;
    height: 1px;
    animation: lineFade 0.3s ease-in-out
      ${(props: IStyleListProps) =>
        props.animateIt ? `, animateIt 0.6s ease-in-out infinite` : ``};
    animation-fill-mode: forwards
      ${(props: IStyleListProps) => (props.animateIt ? `, none` : ``)};
    ${(props: IStyleListProps) => {
      if (props.delay) return `animation-delay: ${props.delay}s`
    }}
  }
  @keyframes lineFade {
    0% {
      width: 0;
    }
    100% {
      width: 16px;
    }
  }
  @keyframes animateIt {
    0% {
      background-color: ${styleVariables.colors.main};
    }
    50% {
      background-color: ${styleVariables.colors.operate};
    }
    100% {
      background-color: ${styleVariables.colors.main};
    }
  }
`

export { StyleListElementWithDots }
