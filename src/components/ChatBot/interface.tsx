interface IHero {
  name: string
  description: string
  profession: string
  image: string
}

interface IPropsChatBot {
  data: {
    allMarkdownRemark: {
      nodes: IHero[]
    }
  }
}

interface IStateChatBot {
  message: string
  messagePlaceholder: string
  messages: any[]
}

export { IStateChatBot, IPropsChatBot }
