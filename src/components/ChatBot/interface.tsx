import { FixedObject } from 'gatsby-image'

interface IHero {
  name: string
  profession: string
  id: string
  description: {
    description: string
  }
  photo: {
    fixed: FixedObject
  }
}

interface IPropsChatBot {
  data: {
    allContentfulTeam: {
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
