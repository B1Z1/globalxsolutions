interface IHero {
  name: string
  image: string
  profession: string
  description: string
}

interface IStateChatBot {
  message: string
  heroes: IHero[]
  messages: any[]
}

export { IStateChatBot }
