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
    const heroes = this.props.data.allMarkdownRemark.nodes
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
            description: finded.description,
            photo: finded.image.fixed,
            profession: finded.profession,
          })
    )

    this.setState({ messages: messages })
    this.resetMessage()
  }

  changeMessage(event) {
    const { value } = event.target
    const heroes = this.props.data.allMarkdownRemark.nodes
    const hero = heroes.find(
      hero => hero.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
    this.setState({
      message: value,
      messagePlaceholder: hero !== undefined && value !== '' ? hero.name : '',
    })
  }

  getAllHeroNames() {
    return this.props.data.allMarkdownRemark.nodes
      .map(hero => hero.name)
      .join(', ')
  }

  render() {
    console.log(this.props)
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
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "team-post" } } }
        ) {
          nodes {
            frontmatter {
              description
              name
              profession
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ChatBot data={data} {...props} />}
  />
)
