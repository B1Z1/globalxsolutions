import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

const StyleSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  fill: ${styleVariables.colors.operate};
  stroke: ${styleVariables.colors.operate};
  stroke-width: 1;
  stroke-linecap: round;
  z-index: 0;
  * {
    opacity: 0.32;
  }
`

const StyleCard = styled.figure`
  position: relative;
  margin-bottom: 0;
  text-align: center;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${styleVariables.colors.operate};
    ${StyleSvg} {
      opacity: 1;
    }
  }
`

const StyleImage = styled.img`
  margin-bottom: 16px;
`

export { StyleCard, StyleImage, StyleSvg }
