module.exports = `
allContentfulEvents {
  edges {
    node {
      slug
      title
      excerption {
        excerption
      }
      content {
        json
      }
      gallery {
        fluid(quality: 100) {
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
`
