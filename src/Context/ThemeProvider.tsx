import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import type { TThemeProviderProps } from './TThemeProviderProps';
import type { TTheme } from './TTheme';
import type { TThemeInit } from './TTheme';
import { ThemeContext } from './ThemeContext';

const getSystemTheme = (): TTheme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [theme, setTheme] = useState<TTheme>(() => getSystemTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};
