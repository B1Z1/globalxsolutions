import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { IProductElement } from '../components/ListWithImages/interface'

import SEO from '../components/seo'
import ListWithImages from '../components/ListWithImages'

import MainLayout from '../layouts/Main'

interface IProductsProps {
  data: {
    allContentfulProducts: {
      elements: IProductElement[]
    }
  }
}

class Products extends React.Component<IProductsProps, {}> {
  render() {
    const { elements } = this.props.data.allContentfulProducts
    return (
      <MainLayout
        linkTo="/conceptions"
        linkText="Koncepcje"
        title="Produkty"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Główna strona" />
        <ListWithImages parentRoot="/products/" elements={elements} />
      </MainLayout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query ProductsQuery {
        allContentfulProducts {
          elements: nodes {
            name: productName
            slug: productSlug
            mainImage: productMainImage {
              fluid {
                src
                base64
                srcSet
              }
            }
          }
        }
      }
    `}
    render={data => <Products data={data} {...props} />}
  />
)
