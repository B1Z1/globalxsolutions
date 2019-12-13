import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { IElementWithImage } from '../components/ListWithImages/interface'

import SEO from '../components/seo'
import ListWithImages from '../components/ListWithImages'

import WrapperLayout from '../layouts/Wrapper'

interface IConceptionsProps {
  data: {
    allContentfulConceptions: {
      elements: IElementWithImage[]
    }
  }
}

class ConceptionsPage extends React.Component<IConceptionsProps, {}> {
  render() {
    const { elements } = this.props.data.allContentfulConceptions
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
            name
            mainImage {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
        }
      }
    `}
    render={data => <ConceptionsPage data={data} {...props} />}
  />
)
