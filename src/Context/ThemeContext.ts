import type { TThemeInit } from './TTheme';
import { createContext } from 'react';

export const ThemeContext = createContext<TThemeInit | undefined>(undefined);

export default { ThemeContext };
