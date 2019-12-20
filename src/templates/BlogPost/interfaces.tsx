interface IPropsBlogPost {
  pageContext: {
    title: string
    parentPath: string
    slug: string
    excerption: {
      excerption: string
    }
    content: {
      json: any
    }
    next: {
      name: string
      slug: string
      url: string
    }
  }
}

export { IPropsBlogPost }
