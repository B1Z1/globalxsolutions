type onClick = () => void

interface IBurgerProps {
  onClick: onClick
  active: boolean
  isDarkMode: boolean
}

export { IBurgerProps }
