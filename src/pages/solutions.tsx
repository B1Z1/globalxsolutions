import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import SEO from '../components/seo'
import ListWithImages from '../components/ListWithImages'

import WrapperLayout from '../layouts/Wrapper'

interface ISolutionsProps {
  data: {
    allContentfulSolutions: {
      elements: {
        title: string
        slug: string
        mainImage: {
          fluid: FluidObject
        }
      }[]
    }
  }
}

class SolutionsPage extends React.Component<ISolutionsProps, {}> {
  render() {
    const elements = this.props.data.allContentfulSolutions.elements.map(
      element => {
        return {
          linkText: element.title,
          slug: element.slug,
          mainImage: element.mainImage,
        }
      }
    )
    return (
      <WrapperLayout
        linkTo="/newsroom"
        linkText="Newsroom"
        title="Rozwiązania"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Rozwiązania" />
        <ListWithImages parentRoot="/solutions/" elements={elements} />
      </WrapperLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query SolutionsQuery {
        allContentfulSolutions {
          elements: nodes {
            title
            slug
            mainImage {
              fluid {
                base64
                src
                srcSet
                sizes
                aspectRatio
              }
            }
          }
        }
      }
    `}
    render={data => <SolutionsPage data={data} {...props} />}
  />
)
