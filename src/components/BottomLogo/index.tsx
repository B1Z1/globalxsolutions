import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { IPropsBottomLogo } from './interface'
import { StyleLogoWrapper } from './style'

class BottomLogo extends React.Component<IPropsBottomLogo, {}> {
  render() {
    const { parpLogo } = this.props.data
    return (
      <StyleLogoWrapper>
        <Img fluid={parpLogo.childImageSharp.fluid} />
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
      }
    `}
    render={data => <BottomLogo data={data} {...props} />}
  />
)
