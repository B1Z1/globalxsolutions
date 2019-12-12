const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const productPost = path.resolve('./src/templates/ProductPost/index.tsx')
  return graphql(`
    query ProductsFullQuery {
      allContentfulProducts {
        nodes {
          name: productName
          slug: productSlug
          mainImage: productMainImage {
            fluid {
              src
              base64
              srcSet
            }
          }
          content: productContent {
            childContentfulRichText {
              html
            }
          }
          gallery: productGallery {
            fluid {
              src
              base64
              srcSet
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allContentfulProducts.nodes

    posts.forEach((post, index) => {
      const { name, slug, mainImage, content, gallery } = post

      createPage({
        path: `/products/${post.slug}`,
        component: productPost,
        context: {
          name,
          slug,
          mainImage,
          content,
          gallery,
        },
      })
    })
  })
}
