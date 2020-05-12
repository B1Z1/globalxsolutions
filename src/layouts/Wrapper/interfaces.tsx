import { IPropsCircle } from '../../components/Circle/interface'
import { IPropsDash } from '../../components/Dash/interface'

interface IStateWrapper {
  isSidebarActive: boolean
  isInSessionStorage: boolean
}

interface IPropsWrapper {
  linkTo?: string
  linkText?: string
  withPreview?: boolean
  title: string
  titleWithMargin: boolean
  isDarkMode: boolean
}

interface IPropsStyleWrapper {
  isDarkMode: boolean
}

interface IDashesDataWrapper {
  main: IPropsDash[]
  link: IPropsDash[]
}

interface ICirclesDataWrapper {
  main: IPropsCircle[]
  link: IPropsCircle[]
}

export {
  IStateWrapper,
  IPropsWrapper,
  IPropsStyleWrapper,
  IDashesDataWrapper,
  ICirclesDataWrapper,
}
