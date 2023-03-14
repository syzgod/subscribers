import * as React from 'react';
import { Container, Grid, Box, IconButton } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProfileCard from './components/ProfileCard';
import AppPagination from './components/pagination/AppPagination';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  ColorModeContext,
  ColorModeContextProvider,
} from './components/ColorModeContext';

function App() {
  const [data, setData] = React.useState<any>([]);

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const renderSubscriber = data.map((profile: any) => (
    <ProfileCard data={profile} />
  ));

  return (
    <Container maxWidth={'lg'} component={'main'}>
      <CssBaseline>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
          }}
        >
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color='inherit'
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Grid container spacing={3}>
            {renderSubscriber}
            <AppPagination setData={(p: any) => setData(p)} />
          </Grid>
        </Box>
      </CssBaseline>
    </Container>
  );
}

export default function WrappedApp() {
  return (
    <ColorModeContextProvider>
      <App />
    </ColorModeContextProvider>
  );
}
