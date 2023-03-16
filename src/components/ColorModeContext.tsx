import * as React from 'react';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';

interface IColorModeContext {
  toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
});

export const ColorModeContextProvider = ({ children }: any) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const darkMode = useSelector((state: any) => state.theme.darkMode);

  React.useMemo(() => {
    if (darkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [darkMode]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
