const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const productPost = path.resolve('./src/templates/ProductPost/index.tsx')
  return graphql(`
    query ProductsQuery {
      allContentfulProducts {
        edges {
          node {
            name: productName
            slug: productSlug
            content: productContent {
              childContentfulRichText {
                html
              }
            }
            mainImage: productMainImage {
              fluid {
                base64
                src
                srcSet
              }
            }
            gallery: productGallery {
              fluid(maxWidth: 320) {
                base64
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allContentfulProducts.edges

    posts.forEach((post, index) => {
      const next = index === posts.length - 1 ? null : posts[index + 1].node
      const { name, slug, content } = post.node
      let { gallery, mainImage } = post.node

      mainImage = mainImage.fluid

      if (gallery !== null) {
        gallery = gallery.map(image => {
          return {
            base64: image.fluid.base64,
            src: image.fluid.src,
            srcSet: image.fluid.srcSet,
          }
        })
      }

      createPage({
        path: `/products/${slug}`,
        component: productPost,
        context: {
          name,
          slug,
          mainImage,
          content,
          gallery,
          next,
          parentPath: '/products',
        },
      })
    })
  })
}
