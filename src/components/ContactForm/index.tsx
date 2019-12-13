import React from 'react'
import { encode } from 'querystring'

import ClassicInput from '../ClassicInput'

import { IPropsContactForm, IStateContactForm } from './interface'
import { StyleButton } from './style'

class ContactForm extends React.Component<
  IPropsContactForm,
  IStateContactForm
> {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()
    const target = ev.target as HTMLInputElement
    if (target.checkValidity()) {
      fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...this.state }),
      })
        .then(() => {
          this.setState({
            name: '',
            email: '',
            phone: '',
          })
        })
        .catch(error => alert(error))
    }
  }

  handleInputChange(ev) {
    const target = ev.target as HTMLInputElement
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    } as Pick<IStateContactForm, keyof IStateContactForm>)
  }

  render() {
    const { isDarkMode } = this.props
    const { email, name, phone } = this.state
    const inputData = [
      {
        name: 'name',
        value: name,
        placeholder: 'Wpisz swoje imię',
        type: 'text',
      },
      {
        name: 'email',
        value: email,
        placeholder: 'Wpisz swój email',
        type: 'email',
      },
      {
        name: 'phone',
        value: phone,
        placeholder: 'Wpisz swój telefon',
        pattern: '^\\+*\\d+$',
        type: 'phone',
      },
    ]
    const $Inputs = inputData.map((data, index) => {
      const { name, value, type, placeholder, pattern } = data

      return (
        <ClassicInput
          key={index}
          handleInputChange={ev => {
            this.handleInputChange(ev)
          }}
          name={name}
          value={value}
          type={type}
          pattern={pattern}
          placeholder={placeholder}
          isDarkMode={isDarkMode}
        />
      )
    })

    return (
      <div>
        <form
          name="contact"
          data-netlify="true"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          {$Inputs}
          <StyleButton type="submit">Wyślij</StyleButton>
        </form>
      </div>
    )
  }
}

export default ContactForm
