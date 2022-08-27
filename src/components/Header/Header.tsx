import { FC, Dispatch, SetStateAction } from 'react';
import { Container, Heading, Toggler, TogglerText } from './styles';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Theme } from '../../App';

interface Props {
  themeMode: string;
  setThemeMode: Dispatch<SetStateAction<Theme>>;
}

const Header: FC<Props> = ({ themeMode, setThemeMode }) => {
  const toggleTheme = () => {
    setThemeMode((theme) => theme === 'light' ? 'dark' : 'light');
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