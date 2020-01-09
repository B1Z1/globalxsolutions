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
  linkTo = '/our-engagement'
  linkText = 'Nasze zaangażowanie'
  title = 'Wydarzenia'
  titleWithMargin = true
  isDarkMode = false

  render() {
    const elements = this.props.data.elements.nodes.map(element => {
      return {
        link: `/events/${element.slug}`,
        title: element.title,
        excerption: element.excerption.excerption,
      }
    })

    return (
      <WrapperLayout
        linkTo={this.linkTo}
        linkText={this.linkText}
        title={this.title}
        titleWithMargin={this.titleWithMargin}
        isDarkMode={this.isDarkMode}
      >
        <SEO title={this.title} />
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
