interface IProductElement {
  name: string
  slug: string
  mainImage: {
    fluid: {
      src: string
      base64: string
      srcSet: string
    }
  }
}
}

interface IPropsListWithImages {
  elements: IProductElement[]
  parentRoot: string
}

export { IPropsListWithImages, IProductElement }
