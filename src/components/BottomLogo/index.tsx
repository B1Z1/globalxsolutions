import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { IPropsBottomLogo } from './interface'
import { StyleLogoWrapper, StyleParpLink, StyleUprpLogo } from './style'
import Img from 'gatsby-image'

class BottomLogo extends React.Component<IPropsBottomLogo, {}> {
  render() {
    const { parpLogo, uprpLogo } = this.props.data
    return (
      <StyleLogoWrapper>
        <StyleUprpLogo fluid={uprpLogo.childImageSharp.fluid}/>
        <StyleParpLink to="/eu-subsidies">
          <Img fluid={parpLogo.childImageSharp.fluid}/>
        </StyleParpLink>
      </StyleLogoWrapper>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query BottomLogoQuery {
        parpLogo: file(relativePath: { eq: "Parp.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        uprpLogo: file(relativePath: { eq: "Logo_UPRP.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <BottomLogo data={data} {...props} />}
  />
)
