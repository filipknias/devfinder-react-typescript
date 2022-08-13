import { FC } from 'react';
import { Container, Heading, Toggler, TogglerText } from './styles';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useThemeMode } from '../../context/ThemeModeProvider';

const Header: FC = () => {
  const [themeMode, setThemeMode] = useThemeMode();

  const toggleTheme = () => {
    setThemeMode((theme: any) => theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Container>
      <Heading>devfinder</Heading>
      <Toggler onClick={toggleTheme}>
        <TogglerText>{themeMode === 'light' ? 'Dark' : 'Light'}</TogglerText>
        {themeMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </Toggler>
    </Container>
  )
}

export default Header;