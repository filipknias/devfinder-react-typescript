import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './utilities/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={{ mode: 'dark', theme }}>
      
    </ThemeProvider>
  );
}

export default App;
