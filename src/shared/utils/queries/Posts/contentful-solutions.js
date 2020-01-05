module.exports = `
allContentfulSolutions {
  edges {
    node {
      title
      slug
      content {
        json
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
        fluid(maxWidth: 2400, quality: 100) {
          base64
          src
          srcSet
          sizes
          aspectRatio
        }
      }
    }
  }
}`
