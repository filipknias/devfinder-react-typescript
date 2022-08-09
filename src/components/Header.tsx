import { FC } from 'react';
import styled from 'styled-components';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useThemeMode } from '../context/ThemeModeProvider';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const HeaderText = styled.h1`
  font-size: 40px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.text};
`;

const HeaderToggler = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 22px;
`;

const TogglerText = styled.span`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 1px;
`;

const Header: FC = () => {
  const [themeMode, setThemeMode] = useThemeMode();

  const toggleTheme = () => {
    setThemeMode((theme: any) => theme === 'light' ? 'dark' : 'light');
  };

  return (
    <HeaderContainer>
      <HeaderText>devfinder</HeaderText>
      <HeaderToggler onClick={toggleTheme}>
        <TogglerText>{themeMode === 'light' ? 'Dark' : 'Light'}</TogglerText>
        {themeMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </HeaderToggler>
    </HeaderContainer>
  )
}

export default Header;