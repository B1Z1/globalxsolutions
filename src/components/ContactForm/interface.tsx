interface IPropsContactForm {
  isDarkMode: boolean
}

interface IStateContactForm {
  name: string
  email: string
  phone: string
  lastAddedName: string
  isSended: boolean
}

interface IPropsStyleContactForm {
  isSended: boolean
}

export { IPropsContactForm, IStateContactForm, IPropsStyleContactForm }
