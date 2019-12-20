import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'
import { IPropsStylePreloader } from './interface'

const HIDE = `opacity: 0; visibility: hidden; pointer-events: none;`
const TRANSITION_HIDE = `transition: opacity, visibility; transition-duration: 0.6s; transition-timing-function: ease-in-out;`
const LOGO_SIZES = {
  sm: '200px',
  md: '400px',
  lg: '600px',
}

const StyleWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${styleVariables.colors.main2};
  color: ${styleVariables.colors.main};
  z-index: 100;
  ${TRANSITION_HIDE}
  ${(props: IPropsStylePreloader) => {
    if (props.isDone) return HIDE
  }}
`

const StyleSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  text-align: center;
  ${(props: IPropsStylePreloader) => {
    if (props.hidden) return HIDE
  }}
  transform: translate(-50%, -50%);
  ${TRANSITION_HIDE}
  @media only screen and (min-width: ${styleVariables.breakPoints.sm}) {
    width: 50%;
  }
`

const StyleLogoWrapper = styled.div`
  position: relative;
  width: 80%;
  margin-bottom: 16px;
  @media only screen and (min-width: ${styleVariables.breakPoints.sm}) {
    width: ${(props: IPropsStylePreloader) => {
      let size = ''
      switch (props.sizeLogo) {
        case 'md':
          size = LOGO_SIZES.md
          break
        case 'lg':
          size = LOGO_SIZES.lg
          break
        default:
          size = LOGO_SIZES.sm
          break
      }
      return size
    }};
  }
`

const StyleSlidesWrapper = styled.div`
  ${(props: IPropsStylePreloader) => {
    if (!props.activeSlidesWrapper) return HIDE
  }}
  ${TRANSITION_HIDE}
`

export { StyleWrapper, StyleSlide, StyleLogoWrapper, StyleSlidesWrapper }
