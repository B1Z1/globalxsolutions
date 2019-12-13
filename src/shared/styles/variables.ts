const mainFontSize = 16

export const styleVariables = {
  colors: {
    main: '#000000',
    main2: '#ffffff',
    operate: '#00A8FF',
  },
  fontSizes: {
    h1: `${20 / mainFontSize}rem`,
    h2: `${18 / mainFontSize}rem`,
    normal: {
      xs: mainFontSize,
      lg: mainFontSize * 1.2,
    },
    mini: `${12 / mainFontSize}rem`,
  },
  fontFamilys: {
    main: ['Montserrat', 'Arial', 'sans'].join(','),
  },
  breakPoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
}
