interface IPropsClassicInput {
  isDarkMode: boolean
  name: string
  value: string
  type: string
  placeholder?: string
  pattern?: string
  handleInputChange: Function
}

interface IStateClassicInput {
  isValide: boolean
}

interface IPropsStyleClassicInput {
  isValide: boolean | null
}

export { IPropsClassicInput, IStateClassicInput, IPropsStyleClassicInput }
