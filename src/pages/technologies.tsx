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

class Technologies extends React.Component<IProps, {}> {
  generateCards(cards: ICardProps[]) {
    return cards.map((card, index: number) => (
      <Card
        key={index}
        icon={require(`../images/TechnologyIcons/${card.icon}`)}
        title={card.title}
      />
    ))
  }

  render() {
    const { data } = this.props
    const cards = this.generateCards(data.site.siteMetadata.technologyCards)
    return (
      <MainLayout
        linkTo="/strategy-and-creation"
        linkText="Strategia i kreacja"
        title="Technologie"
        titleWithMargin={false}
      >
        <SEO title="Technologie" />
        {cards}
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
