import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import WrapperLayout from '../layouts/Wrapper'
import ListBlog from '../components/ListBlog'

interface IOurEngagementPageProps {
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

class OurEngagementPage extends React.Component<IOurEngagementPageProps> {
  linkTo = '/eu-sbsidies'
  linkText = 'Dotacje Unijne'
  title = 'Nasze zaangażowanie'
  titleWithMargin = false
  isDarkMode = false

  render() {
    const elements = this.props.data.elements.nodes.map(element => {
      return {
        link: `/our-engagement/${element.slug}`,
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
      query OurEngagementQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <OurEngagementPage data={data} {...props} />}
  />
)
