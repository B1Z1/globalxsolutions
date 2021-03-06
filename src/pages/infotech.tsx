import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'

import SEO from '../components/seo'

import WrapperLayout from '../layouts/Wrapper'

const StyleImage = styled.div`
  position: relative;
  max-width: 320px;
  margin-bottom: 32px;
`

interface IInfotechProps {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

class InfotechPage extends React.Component<IInfotechProps, {}> {
  render() {
    const imageFluid = this.props.data.file.childImageSharp.fluid

    return (
      <WrapperLayout
        linkTo="/prototypes"
        linkText="Prototypy"
        title="Infotech"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Infotech" />
        <p style={{ marginBottom: 8, marginTop: 8 }}>
          Global X Solutions jest członkiem European Commission AI Alliance
        </p>
        <p style={{ marginBottom: 8, marginTop: 8 }}>
          Global X Solutions jest dumnym członkiem Klastra Technologicznego
          Infotech
        </p>
        <p>
          Global X Solutions Sp. z.o.o. jest zarejestrowany w bazie danych
          Bisnode (współpraca z Dun & Bradstreet) pod numerem D-U-N-S®:
          539321172
        </p>
        <StyleImage>
          <Img fluid={imageFluid} alt="Infotech Logo" />
        </StyleImage>
      </WrapperLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query InfotechLogoQuery {
        file(relativePath: { eq: "infotech.png" }) {
          childImageSharp {
            fluid(maxWidth: 320, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <InfotechPage data={data} {...props} />}
  />
)
