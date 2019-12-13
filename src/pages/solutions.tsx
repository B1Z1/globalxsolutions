import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { IElementWithImage } from '../components/ListWithImages/interface'

import SEO from '../components/seo'
import ListWithImages from '../components/ListWithImages'

import WrapperLayout from '../layouts/Wrapper'

interface ISolutionsProps {
  data: {
    allContentfulSolutions: {
      elements: IElementWithImage[]
    }
  }
}

class SolutionsPage extends React.Component<ISolutionsProps, {}> {
  render() {
    const { elements } = this.props.data.allContentfulSolutions
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
            name
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
