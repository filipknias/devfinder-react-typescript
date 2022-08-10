import 'styled-components';
import { ThemeSet } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    bodyBackground: ThemeSet,
    contentBackground: ThemeSet
    palette: {
      lightBlue: string;
      darkBlue: string;
      white: string;
    },
    text: ThemeSet;
    fonts: {
      primary: string;
    },
    fontWeights: {
      light: number;
      medium: number;
      bold: number;
    },
    borderRadius: string|number;
    contentBoxShadow: ThemeSet;
  }
}