import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'

import { IPropsStyleContactForm } from './interface'

const StyleButton = styled.button`
  display: inline-block;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
`

const StyleThankYou = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  padding: 4px;
  background-color: ${styleVariables.colors.operate};
  ${(props: IPropsStyleContactForm) => {
    return props.isSended
      ? `opacity: 1; visibility: visible;`
      : `opacity: 0; visibility: hidden;`
  }}
  transition: opacity, visibility;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transform: translateX(-50%);
  z-index: 99;
`

export { StyleButton, StyleThankYou }
