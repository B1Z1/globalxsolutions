import { IImageFixed } from '../../shared/interfaces/image-fixed'

interface IHero {
  name: string
  profession: string
  id: string
  description: {
    description: string
  }
  photo: {
    fixed: IImageFixed
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
