import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';

const App: FC = () => {
  return (
    <ThemeProvider theme={{ mode: 'dark', ...theme }}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
