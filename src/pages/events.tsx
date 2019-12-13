import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import ListBlog from '../components/ListBlog'

import WrapperLayout from '../layouts/Wrapper'

interface IEventsProps {
  data: {
    elements: {
      nodes: {
        slug: string
        title: string
        excerption: {
          excerption: string
        }
      }[]
    }
  }
}

class EventsPage extends React.Component<IEventsProps, {}> {
  render() {
    const elements = this.props.data.elements.nodes.map(element => {
      return {
        link: `/newsroom/${element.slug}`,
        title: element.title,
        excerption: element.excerption.excerption,
      }
    })

    return (
      <WrapperLayout
        linkTo="/infotech"
        linkText="Infotech"
        title="Wydarzenia"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Wydarzenia" />
        <ListBlog elements={elements} />
      </WrapperLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query EventsQuery {
        elements: allContentfulEvents {
          nodes {
            slug
            title
            excerption {
              excerption
            }
          }
        }
      }
    `}
    render={data => <EventsPage data={data} {...props} />}
  />
)
