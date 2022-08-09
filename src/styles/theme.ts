import theme from 'styled-theming';

export default {
  background: theme('mode', {
    light: '#FEFEFE',
    dark: '#1F2A48',
  }),
  text: theme('mode', {
    light: '#141C2E',
    dark: '#E8EDF5',
  }),
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