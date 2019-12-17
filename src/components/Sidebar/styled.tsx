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

const StyleSidebar = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  padding: 32px;
  background-color: ${styleVariables.colors.main2};
  overflow: auto;
  transform: translateX(${(props: any) => (props.active ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 20;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    width: 36%;
    height: 100vh;
    transform: translateX(0);
  }
`

const StyleLogos = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    justify-content: flex-end;
  }
`

const StyleLogoElement = styled.li`
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    margin-right: 16px;
    margin-left: 16px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const StyleNavigation = styled.nav`
  margin-left: auto;
  width: 100%;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    width: 50%;
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
      top: 50%;
      left: 0;
      width: 1px;
      height: 100%;
      background-color: ${styleVariables.colors.main};
    }
  }
  &:last-child {
    margin-bottom: 0;
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
    top: 50%;
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
  StyleSidebar,
  StyleLogos,
  StyleLogoElement,
  StyleNavigation,
  StyleNavigationElement,
  StyleNavigationLink,
}
