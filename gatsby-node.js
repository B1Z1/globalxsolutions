const postQueries = require('./src/shared/utils/queries/Posts')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const realisationTemplatePath = path.resolve(
    './src/templates/RealisationsPost/index.tsx'
  )
  const blogTemplatePath = path.resolve('./src/templates/BlogPost/index.tsx')

  return graphql(`
    query PagesQuery {
      ${postQueries.contentfulPrototypes}
      ${postQueries.contentfulConceptions}
      ${postQueries.contentfulSolutions}
      ${postQueries.contentfulNewsroom}
      ${postQueries.contentfulEvents}
      ${postQueries.contentfulMediaAboutUs}
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = [
      {
        edges: result.data.allContentfulPrototypes.edges,
        templatePath: realisationTemplatePath,
        rootPath: '/prototypes',
        nextPage: {
          title: 'Koncepcje',
          slug: '/conceptions',
        },
      },
      {
        edges: result.data.allContentfulConceptions.edges,
        templatePath: realisationTemplatePath,
        rootPath: '/conceptions',
        nextPage: {
          title: 'Rozwiązania',
          slug: '/solutions',
        },
      },
      {
        edges: result.data.allContentfulSolutions.edges,
        templatePath: realisationTemplatePath,
        rootPath: '/solutions',
        nextPage: {
          title: 'Newsroom',
          slug: '/newsroom',
        },
      },
      {
        edges: result.data.allContentfulNewsroom.edges,
        templatePath: blogTemplatePath,
        rootPath: '/newsroom',
        nextPage: {
          title: 'Wydarzenia',
          slug: '/events',
        },
      },
      {
        edges: result.data.allContentfulEvents.edges,
        templatePath: blogTemplatePath,
        rootPath: '/events',
        nextPage: {
          title: 'Infotech',
          slug: '/infotech',
        },
      },
      {
        edges: result.data.allContentfulMediaAboutUs.edges,
        templatePath: blogTemplatePath,
        rootPath: '/media-about-us',
        nextPage: {
          title: 'Kontakt',
          slug: '/contact',
        },
      },
    ]

    posts.forEach(post => {
      const { edges, templatePath, rootPath, nextPage } = post
      generatePosts(edges, templatePath, rootPath, nextPage, createPage)
    })
  })
}

/**
 * @description Here is start, where page generates
 */

function generatePosts(posts, templatePath, rootPath, nextPage, createPage) {
  posts.forEach((post, index) => {
    const next = index === posts.length - 1 ? nextPage : posts[index + 1].node
    const { slug } = post.node

    next['url'] =
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
