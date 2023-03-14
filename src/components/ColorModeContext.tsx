import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

interface IColorModeContext {
  toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
});

export const ColorModeContextProvider = ({ children }: any) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        console.log(mode);
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
