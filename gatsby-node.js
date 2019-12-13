const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const realisationTemplatePath = path.resolve(
    './src/templates/RealisationsPost/index.tsx'
  )
  const blogTemplatePath = path.resolve('./src/templates/BlogPost/index.tsx')

  return graphql(`
    query PagesQuery {
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
              fluid(quality: 100) {
                base64
                src
                srcSet
                sizes
                aspectRatio
              }
            }
            gallery: productGallery {
              fluid(maxWidth: 320, quality: 100) {
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
      allContentfulConceptions {
        edges {
          node {
            name
            slug
            content {
              childContentfulRichText {
                html
              }
            }
            mainImage {
              fluid(quality: 100) {
                base64
                src
                srcSet
                sizes
                aspectRatio
              }
            }
            gallery {
              fluid(maxWidth: 320, quality: 100) {
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
      allContentfulSolutions {
        edges {
          node {
            name
            slug
            content {
              childContentfulRichText {
                html
              }
            }
            mainImage {
              fluid(quality: 100) {
                base64
                src
                srcSet
                sizes
                aspectRatio
              }
            }
            gallery {
              fluid(maxWidth: 320, quality: 100) {
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
      allContentfulNewsroom {
        edges {
          node {
            slug
            title
            excerption {
              excerption
            }
            content {
              childContentfulRichText {
                html
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

    const productPosts = result.data.allContentfulProducts.edges
    const conceptionPosts = result.data.allContentfulConceptions.edges
    const solutionsPosts = result.data.allContentfulSolutions.edges
    const newsroomPosts = result.data.allContentfulNewsroom.edges

    generatePosts(
      productPosts,
      realisationTemplatePath,
      '/products',
      {
        name: 'Koncepcje',
        slug: '/conceptions',
      },
      createPage
    )
    generatePosts(
      conceptionPosts,
      realisationTemplatePath,
      '/conceptions',
      {
        name: 'Rozwiązania',
        slug: '/solutions',
      },
      createPage
    )
    generatePosts(
      solutionsPosts,
      realisationTemplatePath,
      '/solutions',
      {
        name: 'Newsroom',
        slug: '/newsroom',
      },
      createPage
    )
    generatePosts(
      newsroomPosts,
      blogTemplatePath,
      '/newsroom',
      {
        name: 'Wydarzenia',
        slug: '/wydarzenia',
      },
      createPage
    )
  })
}

/**
 * @description Here is start, where page generates
 */

function generatePosts(posts, templatePath, rootPath, nextPage, createPage) {
  posts.forEach((post, index) => {
    const next = index === posts.length - 1 ? nextPage : posts[index + 1].node
    const { slug } = post.node

    next['path'] =
      index === posts.length - 1 ? `${next.slug}` : `${rootPath}/${next.slug}`

    if (post.node.mainImage !== undefined) {
      post.node.mainImage = post.node.mainImage.fluid
    }

    if (post.node.gallery !== undefined) {
      post.node.gallery = post.node.gallery.map(image => {
        return {
          base64: image.fluid.base64,
          src: image.fluid.src,
          srcSet: image.fluid.srcSet,
          sizes: image.fluid.sizes,
          aspectRatio: image.fluid.aspectRatio,
        }
      })
    }

    createPage({
      path: `${rootPath}/${slug}`,
      component: templatePath,
      context: {
        ...post.node,
        next,
      },
    })
  })
}
