import { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProfileCard from './components/ProfileCard';
import AppPagination from './components/pagination/AppPagination';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [data, setData] = useState<any>([]);

  const renderSubscriber = data.map((profile: any) => (
    <ProfileCard data={profile} />
  ));

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth={'lg'} component={'main'}>
        <CssBaseline>
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
    </ThemeProvider>
  );
}

export default App;
