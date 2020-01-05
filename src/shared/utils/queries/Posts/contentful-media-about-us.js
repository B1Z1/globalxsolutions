module.exports = `
allContentfulMediaAboutUs {
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
