import React from 'react'
import { IPropsClassicInput, IStateClassicInput } from './interface'
import { StyleInput, StyleInputWrapper, StyleAlertWrapper } from './style'

import Dash from '../Dash'
import Circle from '../Circle'

class ClassicInput extends React.Component<
  IPropsClassicInput,
  IStateClassicInput
> {
  constructor(props) {
    super(props)

    this.state = {
      isValide: true,
    }
  }

  handleChange(ev) {
    const target = ev.target as HTMLInputElement
    this.setState({
      isValide: target.checkValidity(),
    })
  }

  render() {
    const { isValide } = this.state
    const {
      handleInputChange,
      isDarkMode,
      name,
      type,
      value,
      pattern,
      placeholder,
    } = this.props
    return (
      <StyleInputWrapper>
        <StyleAlertWrapper isValide={isValide}>
          <Dash
            isDarkMode={isDarkMode}
            dashWidth="1px"
            dashHeight="50%"
            left="8px"
            top="50%"
          />
          <Circle withDot={true} isDarkMode={isDarkMode} top="40%" left="0" />
        </StyleAlertWrapper>
        <StyleInput
          isValide={isValide}
          onChange={ev => {
            this.handleChange(ev)
            handleInputChange(ev)
          }}
          name={name}
          value={value}
          placeholder={placeholder}
          type={type}
          pattern={pattern}
          required
        />
      </StyleInputWrapper>
    )
  }
}

export default ClassicInput
