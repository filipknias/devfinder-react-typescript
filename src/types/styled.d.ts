import 'styled-components';
import { ThemeSet } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      mode: string;
      background: {
      light: ThemeSet;
      dark: ThemeSet;
    },
    text: {
      white: string;
      black: string;
    },
    colors: {
      lightBlue: string;
      darkBlue: string;
    },
    fonts: {
      primary: string;
    },
    fontWeights: {
      light: number;
      medium: number;
      bold: number;
    }
  }
}