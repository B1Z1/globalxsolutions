import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StyleImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 320px;
  height: auto;
  opacity: 0;
  transform: translate(-10px, -10px);
  transition: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  pointer-events: none;
  z-index: 1000;
`

const StyleLink = styled.span`
  display: inline-block;
  position: relative;
  transition: color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color: ${styleVariables.colors.operate};
    z-index: -1;
    transition: width 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

const StyleElementWrapper = styled.div`
  display: inline-block;
  position: relative;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    &:hover {
      ${StyleImage} {
        opacity: 1;
        transform: translate(-40px, -110%);
      }
      ${StyleLink}:before {
        width: 100%;
      }
      ${StyleLink} {
        color: ${styleVariables.colors.main2};
      }
    }
  }
`

export { StyleImage, StyleElementWrapper, StyleLink }
