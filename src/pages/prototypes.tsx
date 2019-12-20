import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import SEO from '../components/seo'
import ListWithImages from '../components/ListWithImages'

import WrapperLayout from '../layouts/Wrapper'

interface IProductsProps {
  data: {
    allContentfulProducts: {
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

class ProductsPage extends React.Component<IProductsProps, {}> {
  render() {
    const elements = this.props.data.allContentfulProducts.elements.map(
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
        linkTo="/conceptions"
        linkText="Koncepcje"
        title="Prototypy"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Produkty" />
        <ListWithImages parentRoot="/products/" elements={elements} />
      </WrapperLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query ProductsQuery {
        allContentfulProducts {
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
    render={data => <ProductsPage data={data} {...props} />}
  />
)
