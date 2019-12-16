import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'
import { IPropsStylePreloader } from './interface'

const HIDE = `opacity: 0; visibility: hidden; pointer-events: none;`

const StyleWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${styleVariables.colors.main2};
  color: ${styleVariables.colors.main};
  z-index: 100;
  transition: opacity, visibility;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
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
  width: 50%;
  text-align: center;
  ${(props: IPropsStylePreloader) => {
    if (props.hidden) return HIDE
  }}
  transform: translate(-50%, -50%);
  transition: opacity, visibility;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
`

const StyleLogoWrapper = styled.div`
  position: relative;
  width: ${(props: IPropsStylePreloader) =>
    props.biggerLogo ? '400px' : '200px'};
  margin-bottom: 16px;
`

const StyleSlidesWrapper = styled.div`
  ${(props: IPropsStylePreloader) => {
    if (!props.activeSlidesWrapper) return HIDE
  }}
  transition: opacity, visibility;
  transition-duration: 0.6s;
  transition-timing-function: ease-in-out;
`

export { StyleWrapper, StyleSlide, StyleLogoWrapper, StyleSlidesWrapper }
