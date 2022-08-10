import theme from 'styled-theming';

export default {
  bodyBackground: theme('mode', {
    light: '#F5F8FF',
    dark: '#141C2F',
  }),
  contentBackground: theme('mode', {
    light: '#FEFEFE',
    dark: '#1F2A48',
  }),
  palette: {
    lightBlue: '#0A76F2',
    darkBlue: '#0978F5',
    white: '#FAFAFA',
  },
  text: theme('mode', {
      light: '#4C4F56',
      dark: '#B5BCD1',
  }),
  fonts: {
    primary: 'Roboto Mono',
  },
  fontWeights: {
    light: 300,
    medium: 500,
    bold: 700,
  },
  borderRadius: '10px',
  contentBoxShadow: theme('mode', {
    light: '1px 1px 5px 0px #bdbdbd',
    dark: 'none',
  }),
};  