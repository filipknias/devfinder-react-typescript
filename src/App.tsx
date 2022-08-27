import { FC, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { getGithubUser } from './services/api';
import { GithubUser } from './types/api';
import UserContent from './components/UserContent/UserContent';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import useLocalStorage from './hooks/useLocalStorage';
import { useSearchParams } from 'react-router-dom';

export type Theme = 'dark' | 'light';

const App: FC = () => {
  const [themeMode, setThemeMode] = useState<Theme>('dark');
  const [githubUser, setGithubUser] = useState<GithubUser|null>(null);
  const [githubError, setGithubError] = useState<string|null>(null);
  const [savedTheme, setSavedTheme] = useLocalStorage('theme', 'dark');
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = async (username: string) => {
    if (githubUser && githubUser.login === username) return;
    // Reset state
    setGithubError(null);
    setGithubUser(null);
    // Set search params
    setSearchParams({ username });
  };

  useEffect(() => {
    setSavedTheme(themeMode);
  }, [themeMode]);

  useEffect(() => {
    if (savedTheme) setThemeMode(savedTheme);
  }, []);

  useEffect(() => {
    const userRequest = async () => {
      // Search github user
      try {
        const username = searchParams.get('username');
        if (username) {
          const ghUser = await getGithubUser(username);
          setGithubUser(ghUser);
        }
      } catch (err: any) {
        const errorMessage = err.response.data.message;
        setGithubError(errorMessage);
      }
    };
    userRequest();
  }, [searchParams]);

  // TODO: make tests in components/__tests__ folder

  return (
    <ThemeProvider theme={{ mode: themeMode, ...theme }}>
      <GlobalStyles />
      <Container>
        <Header themeMode={themeMode} setThemeMode={setThemeMode} />
        <SearchBar onSubmit={onSubmit} />
        {githubUser && <UserContent githubUser={githubUser} />}
        {githubError && <ErrorMessage errorMessage={githubError} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
