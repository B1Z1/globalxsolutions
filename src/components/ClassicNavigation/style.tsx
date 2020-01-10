import styled, { keyframes } from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const AnimationLink = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.32;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.76;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyleNavigation = styled.nav`
  margin-left: auto;
  width: 100%;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    width: 50%;
  }
`

const StyleSecondLevelMenuWrapper = styled.div`
  @media only screen and (min-width: ${styleVariables.breakPoints.md}) {
    position: absolute;
    top: 10px;
    right: calc(100% - 16px);
    width: 320px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 20;
    transform: translate(-10px, -15px);
    transition: opacity, visibility, transform;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

const StyleNavigationElement = styled.li`
  position: relative;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 32px;
  &:not(:last-child) {
    &:before {
      content: '';
      position: absolute;
      top: 20px;
      left: 0;
      width: 1px;
      height: 100%;
      background-color: ${styleVariables.colors.main};
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: ${styleVariables.breakPoints.md}) {
    &:hover ${StyleSecondLevelMenuWrapper} {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transform: translate(0);
    }
  }
`

const StyleNavigationLink = styled.span`
  display: block;
  position: relative;
  transition: color 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${styleVariables.colors.operate};
    z-index: -1;
    opacity: 0;
  }
  &:after {
    content: '';
    position: absolute;
    top: 14px;
    left: -32px;
    width: 8px;
    height: 8px;
    background-color: ${styleVariables.colors.main};
    border-radius: 50%;
    transform: translate(-3.5px, -50%);
  }
  &:hover {
    color: ${styleVariables.colors.main2};
    &:before {
      animation: ${AnimationLink} 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-fill-mode: forwards;
    }
    &:after {
      background-color: ${styleVariables.colors.operate};
    }
  }
`

export {
  StyleNavigation,
  StyleNavigationElement,
  StyleNavigationLink,
  StyleSecondLevelMenuWrapper,
}
