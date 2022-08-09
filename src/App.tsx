import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Container from './components/Container';
import Header from './components/Header';
import { useThemeMode } from './context/ThemeModeProvider';

const App: FC = () => { 
  const [themeMode] = useThemeMode();
  return (
    <ThemeProvider theme={{ mode: themeMode, ...theme }}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
