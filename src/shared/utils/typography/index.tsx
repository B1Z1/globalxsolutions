import Typography from 'typography'
const typography = new Typography({
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400'],
    },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Montserrat', 'Arial', 'sans'],
  headerWeight: '400',
  bodyFontFamily: ['Montserrat', 'Arial', 'sans'],
})
export default typography
