module.exports = `
allContentfulNewsroom {
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
    }
  }
}
`
