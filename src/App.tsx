import { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { useThemeMode } from './context/ThemeModeProvider';
import { getGithubUser } from './services/api';
import { GithubUser } from './types/GithubUser';
import UserContent from './components/UserContent/UserContent';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const App: FC = () => { 
  const [themeMode] = useThemeMode();
  const [githubUser, setGithubUser] = useState<GithubUser|null>(null);
  const [githubError, setGithubError] = useState<string|null>(null);

  const onSubmit = async (username: string) => {
    // Reset state
    setGithubError(null);
    setGithubUser(null);
    
    // Search github user
    try {
      const ghUser = await getGithubUser(username);
      setGithubUser(ghUser);
    } catch (err: any) {
      const errorMessage = err.response.data.message;
      setGithubError(errorMessage);
    }
  };

  // TODO: delete theme context and make local function to switch theme and pass it to Header component
  // TODO: put styled components into styles.ts file in each component folder
  // TODO: seperate some sections from UserContent component and make them into components placed in UserContent components folder
  // TODO: make tests in components/__tests__ folder
  // TODO: add react query params when searching user
  // TODO: add breakpoints in theme and make app responsive
  // TODO: save theme mode in local storage

  return (
    <ThemeProvider theme={{ mode: themeMode, ...theme }}>
      <GlobalStyles />
      <Container>
        <Header />
        <SearchBar onSubmit={onSubmit} />
        {githubUser && <UserContent githubUser={githubUser} />}
        {githubError && <ErrorMessage errorMessage={githubError} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
