import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.primary} , monospace;
  }
  #root {
    height: 100vh;
  }
  body {
    background-color: ${({ theme }) => theme.background};
  }
`;
 
export default GlobalStyle;