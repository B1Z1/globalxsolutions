import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import SEO from '../components/seo'
import ListWithImages from '../components/ListWithImages'

import WrapperLayout from '../layouts/Wrapper'

interface IConceptionsProps {
  data: {
    allContentfulConceptions: {
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

class ConceptionsPage extends React.Component<IConceptionsProps, {}> {
  render() {
    const elements = this.props.data.allContentfulConceptions.elements.map(
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
        linkTo="/solutions"
        linkText="Rozwiązania"
        title="Koncepcje"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Koncepcje" />
        <ListWithImages parentRoot="/conceptions/" elements={elements} />
      </WrapperLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query ConceptionsQuery {
        allContentfulConceptions {
          elements: nodes {
            slug
            title
            mainImage {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    `}
    render={data => <ConceptionsPage data={data} {...props} />}
  />
)
