import React from 'react'
import styled from 'styled-components'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import SEO from '../components/seo'
import TextOnBlack from '../components/TextOnBlack'

import WrapperLayout from '../layouts/Wrapper'
import { FluidObject } from 'gatsby-image'

interface IEsSubsidiesProps {
  data: {
    image: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

class EuSubsidiesPage extends React.Component<IEsSubsidiesProps, {}> {
  TITLE = 'Dotacje unijne'
  DESCRIPTION =
    'Celem projektu jest rozwój przedsiębiorstwa poprzez wdrożenie autorskich wzorów budki terapeutycznej'
  LINK_TO = '/talk-about-us'
  LINK_TEXT = 'Mówią o nas'
  TITLE_WITH_MARGIN = true
  IS_DARK_MODE = false

  render() {
    const { fluid } = this.props.data.image.childImageSharp

    return (
      <WrapperLayout
        linkTo={this.LINK_TO}
        linkText={this.LINK_TEXT}
        title={this.TITLE}
        titleWithMargin={this.TITLE_WITH_MARGIN}
        isDarkMode={this.IS_DARK_MODE}
      >
        <SEO
          title={this.TITLE}
          description={this.DESCRIPTION}
          meta={[
            {
              keywords:
                'Dotacje unijne, Europejski Fundusz Rozwoju Regionalnego, EFRR, S-Pokój, budka terapeutyczna, UE',
            },
          ]}
        />
        <Img
          style={{ maxWidth: '80%' }}
          objectFit="fill"
          objectPosition="50% 50%"
          alt="PARP"
          fluid={fluid}
        />
        <p>
          W ramach Poddziałania 2 . 3 . 5 Design dla przedsiębiorców Programu
          Operacyjnego Inteligentny Rozwój 2014 - 2020 współfinansowanego ze
          środków Europejskiego Funduszu Rozwoju Regionalnego.
        </p>
        <p>
          Celem projektu jest rozwój przedsiębiorstwa poprzez wdrożenie
          autorskich wzorów budki terapeutycznej{' '}
          <TextOnBlack
            isDarkMode={this.IS_DARK_MODE}
            withMargin={false}
            animationToggle={true}
          >
            <Link to="/prototypes/kapsula-terapeutyczna-s-pokoj">S-POKÓJ</Link>
          </TextOnBlack>
          .
        </p>
        <p>
          Efektem będzie wprowadzenia na rynek nowego produktu w postaci budki
          terapeutycznej{' '}
          <TextOnBlack
            isDarkMode={this.IS_DARK_MODE}
            withMargin={false}
            animationToggle={true}
          >
            <Link to="/prototypes/kapsula-terapeutyczna-s-pokoj">S-POKÓJ</Link>
          </TextOnBlack>{' '}
          wyposażonej w lampy emitujące światło białe oraz narzędzia
          diagnozujące.
        </p>
        <p>Wartość projektu wynosi:</p>
        <h3>
          <TextOnBlack isDarkMode={this.IS_DARK_MODE} withMargin={false}>
            606 267, 00 zł
          </TextOnBlack>
        </h3>
        <p>Dofinansowanie projektu z funduszy UE:</p>
        <h3>
          <TextOnBlack isDarkMode={this.IS_DARK_MODE} withMargin={false}>
            418 965, 00 zł
          </TextOnBlack>
        </h3>
      </WrapperLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query SubsidiesQuery {
        image: file(relativePath: { eq: "Parp.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <EuSubsidiesPage data={data} {...props} />}
  />
)
