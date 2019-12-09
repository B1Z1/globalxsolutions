import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import HeroCard from '../HeroCard'

import { IStateChatBot, IPropsChatBot } from './interface'
import { IPropsHeroCard } from '../HeroCard/interface'

import {
  StyleMessage,
  StyleInput,
  StyleInputWrapper,
  StyleInputPlaceholder,
} from './style'

class ChatBot extends React.Component<IPropsChatBot, IStateChatBot> {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      messagePlaceholder: '',
      messages: [],
    }
  }

  resetMessage() {
    this.setState({ message: '', messagePlaceholder: '' })
  }

  generateHero(content: IPropsHeroCard) {
    const { description, photo, name, profession } = content

    return (
      <HeroCard
        key={this.state.messages.length + 1}
        name={name}
        profession={profession}
        description={description}
        photo={photo}
      />
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
    const heroes = this.props.data.allContentfulTeam.nodes
    const finded = heroes.find(
      hero =>
        hero.name.toLowerCase().indexOf(this.state.message.toLowerCase()) !== -1
    )
    const { messages } = this.state

    messages.push(
      finded === undefined
        ? this.generateNotFound()
        : this.generateHero({
            name: finded.name,
            description: finded.description.description,
            photo: finded.photo.fixed,
            profession: finded.profession,
          })
    )

    this.setState({ messages: messages })
    this.resetMessage()
  }

  changeMessage(event) {
    const { value } = event.target
    const heroes = this.props.data.allContentfulTeam.nodes
    const hero = heroes.find(
      hero => hero.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
    this.setState({
      message: value,
      messagePlaceholder: hero !== undefined && value !== '' ? hero.name : '',
    })
  }

  getAllHeroNames() {
    return this.props.data.allContentfulTeam.nodes
      .map(hero => hero.name)
      .join(', ')
  }

  render() {
    const { message, messages, messagePlaceholder } = this.state
    const heroNames = this.getAllHeroNames()

    return (
      <div>
        <div>
          <StyleMessage>Wpisz imię członka zespołu:</StyleMessage>
          <StyleMessage>({heroNames})</StyleMessage>
          {messages.map(message => message)}
        </div>
        <form
          onSubmit={event => {
            this.onSubmit(event)
          }}
        >
          <StyleInputWrapper>
            <StyleInput
              type="text"
              value={message}
              onChange={event => {
                this.changeMessage(event)
              }}
              placeholder="Wpisz imię członka"
              autoFocus
            />
            <StyleInputPlaceholder>{messagePlaceholder}</StyleInputPlaceholder>
          </StyleInputWrapper>
        </form>
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query TeamQuery {
        allContentfulTeam {
          nodes {
            name
            profession
            id
            photo {
              fixed(width: 160, height: 265, quality: 100) {
                src
                base64
                height
                srcSet
                width
              }
            }
            description {
              description
            }
          }
        }
      }
    `}
    render={data => <ChatBot data={data} {...props} />}
  />
)
