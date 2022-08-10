import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Container from './components/Container';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { useThemeMode } from './context/ThemeModeProvider';

const App: FC = () => { 
  const [themeMode] = useThemeMode();
  return (
    <ThemeProvider theme={{ mode: themeMode, ...theme }}>
      <GlobalStyles />
      <Container>
        <div style={{ width: '100%' }}>
          <Header />
          <SearchBar />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
