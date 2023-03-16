import * as React from 'react';
import { Container, Grid, Box, IconButton, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProfileCard from './components/ProfileCard';
import AppPagination from './components/pagination/AppPagination';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './store/reducers/themeSlice';
import { enqueueSnackbar } from 'notistack';

function App() {
  const [data, setData] = React.useState<any>([]);
  //
  const theme = useTheme();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.theme.darkMode);

  const renderSubscriber = data.map((profile: any) => (
    <ProfileCard key={profile.id} data={profile} />
  ));

  return (
    <CssBaseline>
      <Container
        maxWidth={'lg'}
        component={'main'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
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
          {darkMode ? 'Dark' : 'Light'} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => dispatch(toggleTheme())}
            color='inherit'
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
        <TextField id='standard-basic' label='Search' variant='standard' />
        <AppPagination setData={(p: any) => setData(p)} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            spacing={2}
            columns={6}
            wrap='wrap'
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            {renderSubscriber}
          </Grid>
        </Box>
        <AppPagination setData={(p: any) => setData(p)} />
      </Container>
    </CssBaseline>
  );
}

export default App;
