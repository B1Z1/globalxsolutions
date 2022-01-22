import styled from 'styled-components'
import { styleVariables } from '../../shared/styles/variables'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const StyleLogoWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 1%;
  display: flex;
  align-items: center;
  width: 98%;
  z-index: 30;

  @media only screen and (min-width: ${styleVariables.breakPoints.sm}) {
    right: 20%;
    width: 60%;
  }
  @media only screen and (min-width: ${styleVariables.breakPoints.md}) {
    width: 512px;
    bottom: 32px;
    right: 32px;
  }
`

const StyleParpLink = styled(Link)`
  flex: 1 1 auto;
`

const StyleUprpLogo = styled(Img)`
  width: 48px;
  height: auto;
  margin-right: 48px;
`

export { StyleLogoWrapper, StyleUprpLogo, StyleParpLink }
