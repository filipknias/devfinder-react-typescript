import 'styled-components';
import { ThemeSet } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    background: ThemeSet,
    text: ThemeSet,
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