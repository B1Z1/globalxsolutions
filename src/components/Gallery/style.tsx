import styled from 'styled-components'

import { styleVariables } from '../../shared/styles/variables'

import { IStyleProps } from './interface'

const SIZES = {
  sm: '33%',
  lg: '80%',
}

const ANIMATION = {
  start: `
  animation: activate 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  @keyframes activate {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }
  @media only screen and (min-width: ${styleVariables.breakPoints.md}) {
    @keyframes activate {
      0% {
        width: 0%;
      }
      100% {
        width: 60%;
      }
    }
  }
  `,
  end: `animation: deactivate 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-play-state: running;
  @keyframes deactivate {
    0% {
      width: 80%;
    }
    100% {
      width: 0%;
    }
  }
  @media only screen and (min-width: ${styleVariables.breakPoints.md}) {
    @keyframes deactivate {
      0% {
        width: 60%;
      }
      100% {
        width: 0%;
      }
    }
  }
  `,
}

const StyleWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-right: -16px;
  margin-left: -16px;
`

const StyleImageWrapper = styled.li`
  position: relative;
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  &:first-child {
    margin-top: 0;
  }
  @media only screen and (min-width: ${styleVariables.breakPoints.md}) {
    flex: 0 0
      ${(props: IStyleProps) =>
        SIZES[props.type] !== undefined ? SIZES[props.type] : '100%'};
    max-width: ${(props: IStyleProps) =>
      SIZES[props.type] !== undefined ? SIZES[props.type] : '100%'};
  }
`

const StyleShowWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.3);
`

const StyleIShowImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 50%;
  transform: translate(-50%, -50%);
  ${(props: IStyleProps) => {
    return ANIMATION[props.animation]
  }}

  @media only screen and (min-width: ${styleVariables.breakPoints.md}) {
    width: 60%;
    height: 80%;
    ${(props: IStyleProps) => {
      return ANIMATION[props.animation]
    }}
  }
`

export {
  StyleWrapper,
  StyleImageWrapper,
  StyleShowWrapper,
  StyleIShowImageWrapper,
}
