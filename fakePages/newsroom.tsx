import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import ListBlog from '../components/ListBlog'

import { IPropsListBlog } from '../components/ListBlog/interface'

import WrapperLayout from '../layouts/Wrapper'

interface INewsroomProps {
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

class NewsroomPage extends React.Component<INewsroomProps, {}> {
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
        linkTo="/events"
        linkText="Wydarzenia"
        title="Newsroom"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Newsroom" />
        <ListBlog elements={elements} />
      </WrapperLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query NewsroomQuery {
        elements: allContentfulNewsroom {
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
    render={data => <NewsroomPage data={data} {...props} />}
  />
)
