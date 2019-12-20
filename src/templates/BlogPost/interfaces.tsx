interface IPropsBlogPost {
  pageContext: {
    title: string
    parentPath: string
    slug: string
    excerption: string
    content: {
      json: any
    }
    next: {
      name: string
      slug: string
      path: string
    }
  }
}

export { IPropsBlogPost }
