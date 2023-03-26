import * as React from 'react';
import {
  Container,
  Grid,
  Box,
  IconButton,
  TextField,
  Button,
  Pagination,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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
  const [limit, setLimit] = React.useState(7);
  const {
    data: subscribers,
    isLoading,
    isFetching,
  } = useListSubscribersQuery<SubscribersListResponse>({ page, limit });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const onSelectChange = (event: SelectChangeEvent) => {
    setLimit(parseInt(event.target.value));
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
            <FormControl
              variant='standard'
              sx={{ m: 1, minWidth: 80 }}
              size='small'
            >
              <InputLabel id='simple-select-autowidth-label'>
                Subscribers
              </InputLabel>
              <Select
                labelId='simple-select-autowidth-label'
                id='simple-select-autowidth'
                value={limit.toString()}
                onChange={onSelectChange}
                autoWidth
                label='sub'
              >
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
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
            <FormControl
              variant='standard'
              sx={{ m: 1, minWidth: 80 }}
              size='small'
            >
              <InputLabel id='simple-select-autowidth-label'>
                Subscribers
              </InputLabel>
              <Select
                labelId='simple-select-autowidth-label'
                id='simple-select-autowidth'
                value={limit.toString()}
                onChange={onSelectChange}
                autoWidth
                label='Sub'
              >
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
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
