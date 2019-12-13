import React from 'react'
import { IPropsContactForm, IStateContactForm } from './interface'
import {} from './style'
import { encode } from 'querystring'

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

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(res => {
        console.log(res)
        alert('Success!')
      })
      .catch(error => alert(error))
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
    const { email, name, phone } = this.state

    return (
      <form
        name="contact"
        data-netlify="true"
        data-netlify-recaptcha="true"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div data-netlify-recaptcha="true"></div>
        <input
          onChange={this.handleInputChange}
          name="name"
          value={name}
          type="text"
        />
        <input
          onChange={this.handleInputChange}
          name="email"
          value={email}
          type="text"
        />
        <input
          onChange={this.handleInputChange}
          name="phone"
          value={phone}
          type="text"
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default ContactForm
