import { FC, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Container from './components/Container';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { useThemeMode } from './context/ThemeModeProvider';
import { getGithubUser } from './services/api';
import { GithubUser } from './types/GithubUser';

const App: FC = () => { 
  const [themeMode] = useThemeMode();
  const [githubUser, setGithubUser] = useState<GithubUser|null>(null);

  const onSubmit = async (username: string) => {
    try {
      const ghUser = await getGithubUser(username);
      setGithubUser(ghUser);
    } catch (err: any) {
      const errorMessage = err.response.data.message;
      console.log(errorMessage)
    }
  };

  return (
    <ThemeProvider theme={{ mode: themeMode, ...theme }}>
      <GlobalStyles />
      <Container>
        <div style={{ width: '100%' }}>
          <Header />
          <SearchBar onSubmit={onSubmit} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
