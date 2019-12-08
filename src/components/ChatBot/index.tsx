import React from 'react'

import { IStateChatBot } from './interface'

import { StyleMessage, StyleInput } from './style'

class ChatBot extends React.Component<{}, IStateChatBot> {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      heroes: [
        {
          description: 'Description',
          image: 'image',
          name: 'Name',
          profession: 'profession',
        },
      ],
      messages: [],
    }
  }

  resetMessage() {
    this.setState({ message: '' })
  }

  generateHero(
    name: string,
    description: string,
    image: string,
    profession: string
  ) {
    return (
      <div>
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p>{name}</p>
        <p>{profession}</p>
        <p>{description}</p>
      </div>
    )
  }

  generateNotFound() {
    return (
      <p key={this.state.messages.length + 1}>
        Nie znaleziono takiego członka:(
      </p>
    )
  }

  onSubmit(event) {
    event.preventDefault()
    const finded = this.state.heroes.find(
      hero => hero.name.toLowerCase() === this.state.message.toLowerCase()
    )
    const { messages } = this.state

    messages.push(
      finded === undefined
        ? this.generateNotFound()
        : this.generateHero(
            finded.name,
            finded.description,
            finded.image,
            finded.profession
          )
    )

    this.setState({ messages: messages })
    this.resetMessage()
  }

  changeMessage(event) {
    const { value } = event.target
    this.setState({ message: value })
  }

  render() {
    const { message, messages } = this.state
    return (
      <div>
        <div>
          <StyleMessage>Wpisz imię członka zespołu:</StyleMessage>
          <StyleMessage>(Piotr, Illia, Ewa, Krzysztof)</StyleMessage>
          {messages.map(message => message)}
        </div>
        <form
          onSubmit={event => {
            this.onSubmit(event)
          }}
        >
          <StyleInput
            type="text"
            value={message}
            onChange={event => {
              this.changeMessage(event)
            }}
            placeholder="Wpisz imię członka"
            autoFocus
          />
        </form>
      </div>
    )
  }
}

export default ChatBot
