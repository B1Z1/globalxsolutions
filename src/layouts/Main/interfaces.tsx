import { IPropsCircle } from '../../components/Circle/interface'
import { IPropsDash } from '../../components/Dash/interface'

interface IStateMain {}

interface IDashesData {
  main: IPropsDash[]
  link: IPropsDash[]
}

interface ICirclesData {
  main: IPropsCircle[]
  link: IPropsCircle[]
}

interface IPropsMain {
  linkTo: string
  linkText: string
  title: string
  titleWithMargin: boolean
  isDarkMode: boolean
}

export { IStateMain, IPropsMain, IDashesData, ICirclesData }
