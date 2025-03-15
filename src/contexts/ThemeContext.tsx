
import React, { createContext, useContext, useEffect } from 'react';
import information from '../data';

type ThemeType = 'light' | 'dark' | 'blue' | 'purple';
type LayoutType = 1 | 2 | 3 | 4 | 5;

interface ThemeContextType {
  theme: ThemeType;
  layout: LayoutType;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  layout: 1
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = information.theme as ThemeType;
  const layout = information.layout as LayoutType;

  // Apply theme class to document element
  useEffect(() => {
    document.documentElement.classList.remove('theme-light', 'theme-dark', 'theme-blue', 'theme-purple');
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, layout }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
