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
        linkTo="/contact"
        linkText="Kontakt z nami"
        title="Infotech"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Infotech" />
        <p>
          Global X Solutions jest członkiem Europejskiego Sojuszu Sztucznej
          Inteligencji (European Commission AI Alliance). Global X Solutions Sp.
          z.o.o. jest zarejestrowany w bazie danych Bisnode (współpraca z Dun &
          Bradstreet) pod numerem D-U-N-S®: 539321172 Global X Solutions jest
          dumnym członkiem klastra technologicznego Infotech
        </p>
        <StyleImage>
          <Img fluid={imageFluid} />
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
