import * as React from 'react';
import {
  Container,
  Grid,
  Box,
  IconButton,
  TextField,
  Button,
  Pagination,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './store/reducers/themeSlice';
import SearchIcon from '@mui/icons-material/Search';
import SubscribersList from './components/SubscribersList';
import {
  SubscribersListResponse,
  useListSubscribersQuery,
} from './components/services/subscribers';

function App() {
  const [page, setPage] = React.useState(1);
  const {
    data: subscribers,
    isLoading,
    isFetching,
  } = useListSubscribersQuery<SubscribersListResponse>(page);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const theme = useTheme();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.theme.darkMode);

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
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 3.5 }} />
          <TextField
            id='standard-basic'
            label='Search'
            variant='standard'
            helperText='Please enter a name or country'
          />
        </Box>
        <Button variant='contained' sx={{ marginTop: '10px' }}>
          Search
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            sx={{ margin: '20px 0px' }}
          >
            <Pagination
              size='large'
              count={10}
              page={page}
              onChange={handleChange}
              color='primary'
              showFirstButton
              showLastButton
            />
          </Box>
          <Grid
            container
            spacing={2}
            columns={6}
            wrap='wrap'
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            sx={{
              display: 'flex',
              marginTop: '10px',
              alignItems: 'center',
            }}
          >
            <SubscribersList subscribers={subscribers} isLoading={isLoading} />
          </Grid>
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            sx={{ margin: '20px 0px' }}
          >
            <Pagination
              size='large'
              count={10}
              page={page}
              onChange={handleChange}
              color='primary'
              showFirstButton
              showLastButton
            />
          </Box>
        </Box>
      </Container>
    </CssBaseline>
  );
}

export default App;
