interface IStateMain {
  isSidebarActive: boolean
}

interface IPropsMain {
  linkTo: string
  linkText: string
  title: string
  titleWithMargin: boolean
  isDarkMode: boolean
}

interface IPropsStyleMain {
  isDarkMode: boolean
}

export { IStateMain, IPropsMain, IPropsStyleMain }
