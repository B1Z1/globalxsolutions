import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { styleVariables } from '../shared/styles/variables'

import { ICardProps } from '../components/Card/interface'

import SEO from '../components/seo'
import Card from '../components/Card'

import MainLayout from '../layouts/Main'

interface IProps {
  data: {
    site: {
      siteMetadata: {
        technologyCards: ICardProps[]
      }
    }
  }
}

const StyleCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -16px;
  margin-left: -16px;
`

const StyleCardElement = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-bottom: 32px;
  @media only screen and (min-width: ${styleVariables.breakPoints.sm}) {
    flex: 0 0 33%;
    max-width: 33%;
  }
  @media only screen and (min-width: ${styleVariables.breakPoints.md}) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`

class Technologies extends React.Component<IProps, {}> {
  generateCards(cards: ICardProps[]) {
    return cards.map((card, index: number) => (
      <StyleCardElement key={index}>
        <Card
          icon={require(`../images/TechnologyIcons/${card.icon}`)}
          title={card.title}
        />
      </StyleCardElement>
    ))
  }

  render() {
    const { data } = this.props
    const $Cards = this.generateCards(data.site.siteMetadata.technologyCards)

    return (
      <MainLayout
        linkTo="/strategy-and-creation"
        linkText="Strategia i kreacja"
        title="Technologie"
        titleWithMargin={true}
      >
        <SEO title="Technologie" />
        <StyleCardsWrapper>{$Cards}</StyleCardsWrapper>
      </MainLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query TechnologyQuery {
        site {
          siteMetadata {
            technologyCards {
              icon
              title
            }
          }
        }
      }
    `}
    render={data => <Technologies data={data} {...props} />}
  />
)
