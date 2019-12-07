import styled from 'styled-components'

import { styleVariables } from '../../shared/styles/variables'

const StyleList = styled.ul`
  position: fixed;
  bottom: 32px;
  left: 32px;
  display: flex;
  align-items: center;
`

const StyleItem = styled.li`
  margin-right: 8px;
  margin-left: 8px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

const StyleDash = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 1px;
  height: 0;
  overflow: hidden;
  transform: translateX(-50%);
  transition: height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0.3s;
  pointer-events: none;
  * {
    background-color: ${styleVariables.colors.operate};
  }
`

const StyleCircle = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  width: 16px;
  height: 16px;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  pointer-events: none;
  * {
    background-color: ${styleVariables.colors.operate};
  }
`

const StyleLink = styled.a`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  color: ${styleVariables.colors.main};
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${styleVariables.colors.operate};
    ${StyleDash} {
      height: 16px;
    }
    ${StyleCircle} {
      opacity: 1;
    }
  }
`

const StyleSocialSvg = styled.svg`
  width: 24px;
  height: 24px;
  transition: fill 0.3s ease-in-out;
  &:hover {
    fill: ${styleVariables.colors.operate};
  }
`

export {
  StyleList,
  StyleItem,
  StyleLink,
  StyleDash,
  StyleCircle,
  StyleSocialSvg,
}
