import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { IPropsBottomLogo } from './interface'
import { StyleLogoWrapper } from './style'

class BottomLogo extends React.Component<IPropsBottomLogo, {}> {
  render() {
    const { parpLogo } = this.props.data
    return (
      <StyleLogoWrapper>
        <Link to="/eu-subsidies">
          <Img fluid={parpLogo.childImageSharp.fluid} />
        </Link>
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
