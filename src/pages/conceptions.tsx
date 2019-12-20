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
  TITLE = 'Koncepcje'
  LINK_TO = '/solutions'
  LINK_TEXT = 'Rozwiązania'
  TITLE_WITH_MARGIN = true
  IS_DARK_MODE = false

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
        linkTo={this.LINK_TO}
        linkText={this.LINK_TEXT}
        title={this.TITLE}
        titleWithMargin={this.TITLE_WITH_MARGIN}
        isDarkMode={this.IS_DARK_MODE}
      >
        <SEO
          title={this.TITLE}
          description="Koncepcje tworzone przez nasz zespół"
          meta={[
            {
              keywords:
                'globalxsolutions koncepcje, koncepcje, prototypy, rozwiązania, s-pokój',
            },
          ]}
        />
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
              fluid(maxWidth: 320, maxHeight: 320, quality: 100) {
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
