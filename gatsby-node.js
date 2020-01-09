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
      ${postQueries.contentfulOurEngagement}
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
          title: 'Nasze zaangażowanie',
          slug: '/our-engagement',
        },
      },
      {
        edges: result.data.allContentfulOurEngagement.edges,
        templatePath: blogTemplatePath,
        rootPath: '/our-engagement',
        nextPage: {
          title: 'Dotacje Unijne',
          slug: '/eu-subsidies',
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
      new PostGenerator(edges, templatePath, rootPath, nextPage, createPage)
    })
  })
}

/**
 * @description Here is start, where page generates
 */

class PostGenerator {
  constructor(posts, templatePath, rootPath, nextPage, createPage) {
    this.posts = posts
    this.templatePath = templatePath
    this.rootPath = rootPath
    this.nextPage = nextPage
    this.createPage = createPage
    this.init()
  }

  init() {
    this.generatePosts()
  }

  generatePosts() {
    this.posts.forEach((post, index) => {
      const postsLength = this.posts.length - 1
      const next = this.getNextPage(
        this.isNextPageLast(index, postsLength),
        index
      )
      const { node } = post
      const { slug, mainImage, gallery } = node
      let mainImageFluid = {}
      let normalizedGallery = {}

      next['url'] = this.generateUrlForNextPage(
        this.isNextPageLast(index, postsLength),
        next.slug
      )

      if (this.isElementExist(mainImage)) {
        mainImageFluid = mainImage.fluid
        node.mainImage = mainImageFluid
      }

      if (this.isElementExist(gallery)) {
        normalizedGallery = this.getNormalizedGallery(gallery)
        node.gallery = normalizedGallery
      }

      this.createPage({
        path: `${this.rootPath}/${slug}`,
        component: this.templatePath,
        context: {
          ...node,
          next,
        },
      })
    })
  }

  isElementExist(element) {
    return element !== undefined
  }

  generateUrlForNextPage(isLastPage, nextPageSlug) {
    return isLastPage ? nextPageSlug : `${this.rootPath}/${nextPageSlug}`
  }

  getNextPage(isLastPage, currentIndex) {
    return isLastPage ? this.nextPage : this.posts[currentIndex + 1].node
  }

  isNextPageLast(index, length) {
    return index === length
  }

  getNormalizedGallery(gallery) {
    return gallery.map(image => {
      return {
        base64: image.fluid.base64,
        src: image.fluid.src,
        srcSet: image.fluid.srcSet,
        sizes: image.fluid.sizes,
        aspectRatio: image.fluid.aspectRatio,
      }
    })
  }
}
