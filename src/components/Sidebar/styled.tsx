import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'
import { IStylePropsSidebar } from './interfaces'

const StyleSidebar = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  padding: 32px;
  padding-bottom: 64px;
  background-color: ${styleVariables.colors.main2};
  overflow: auto;
  transform: translateX(
    ${(props: IStylePropsSidebar) => (props.active ? '0' : '100%')}
  );
  transition: transform 0.3s ease-in-out;
  z-index: 20;
  @media only screen and (min-width: ${styleVariables.breakPoints.lg}) {
    width: 40%;
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

export { StyleSidebar, StyleLogos, StyleLogoElement }
