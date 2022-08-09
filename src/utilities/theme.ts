import theme from 'styled-theming';

export default {
  background: {
    light: theme('mode', {
      light: '#1F2A48',
      dark: '#FEFEFE'
    }),
    dark: theme('mode', {
      dark: '#F5F8FF',
      light: '#141C2F'
    }),
  },
  text: {
    white: '#E5EBF4',
    black: '#3E434B',
  },
  colors: {
    lightBlue: '#0A76F2',
    darkBlue: '#275CA0',
  },
  fonts: {
    primary: 'Roboto Mono',
  },
  fontWeights: {
    light: 300,
    medium: 500,
    bold: 700,
  },
};  