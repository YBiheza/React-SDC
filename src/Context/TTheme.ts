type TTheme = 'light' | 'dark';

type TThemeInit = {
  theme: TTheme;
  toggleTheme: () => void;
};

export type { TTheme, TThemeInit };
