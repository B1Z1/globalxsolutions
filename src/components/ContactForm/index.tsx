import React from 'react'
import { encode } from 'querystring'
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3'

import ClassicInput from '../ClassicInput'
import TextOnBlack from '../TextOnBlack'

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
        .then(res => {
          console.log(res)
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
          data-netlify-recaptcha="true"
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div data-netlify-recaptcha="true"></div>
          {$Inputs}
          <GoogleReCaptchaProvider reCaptchaKey="6Lfbp8cUAAAAAIoM44MiaZ5oGt5q2KticGVh2z0O">
            <GoogleReCaptcha onVerify={token => console.log(token)} />
          </GoogleReCaptchaProvider>
          <StyleButton type="submit">
            <TextOnBlack
              withMargin={false}
              paddingRight="16px"
              isDarkMode={isDarkMode}
            >
              Wyślij
            </TextOnBlack>
          </StyleButton>
        </form>
      </div>
    )
  }
}

export default ContactForm
