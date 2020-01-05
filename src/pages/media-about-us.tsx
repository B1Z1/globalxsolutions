import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'
import WrapperLayout from '../layouts/Wrapper'
import { IPropsListBlog } from '../components/ListBlog/interface'
import ListBlog from '../components/ListBlog'

interface TalkAboutUsPageProps {
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

class TalkAboutUsPage extends React.Component<TalkAboutUsPageProps, {}> {
  TITLE = 'Mówią o nas'
  DESCRIPTION = 'Co mówią media o GlobalXSolutions'
  LINK_TO = '/contact'
  LINK_TEXT = 'Kontakt'
  TITLE_WITH_MARGIN = true
  IS_DARK_MODE = false

  render() {
    const elements = this.props.data.elements.nodes.map(element => {
      return {
        link: `/media-about-us/${element.slug}`,
        title: element.title,
        excerption: element.excerption.excerption,
      }
    })

    return (
      <WrapperLayout
        linkTo={this.LINK_TO}
        linkText={this.LINK_TEXT}
        title={this.TITLE}
        titleWithMargin={this.TITLE_WITH_MARGIN}
        isDarkMode={this.IS_DARK_MODE}
      >
        <SEO title={this.TITLE} />
        <ListBlog elements={elements} />
      </WrapperLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query TalkAboutUsQuery {
        elements: allContentfulMediaAboutUs {
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
    render={data => <TalkAboutUsPage data={data} {...props} />}
  />
)
