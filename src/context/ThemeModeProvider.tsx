import { createContext, useContext, useState, FC } from 'react';

const ThemeModeContext = createContext<any>({});
export const useThemeMode = () => useContext(ThemeModeContext);

interface Props {
  children: JSX.Element;
}

type ThemeMode = 'light'|'dark';

const ThemeModeProvider: FC<Props> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  return (
    <ThemeModeContext.Provider value={[themeMode, setThemeMode]}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeProvider;