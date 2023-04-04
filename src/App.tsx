import * as React from 'react';
import {
  Container,
  Grid,
  Box,
  IconButton,
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
import SubscribersList from './components/SubscribersList';
import {
  SubscribersListResponse,
  useGetAllSubscribersQuery,
  useGetSubscribersPerPageQuery,
} from './components/services/subscribers';
import { enqueueSnackbar } from 'notistack';
import SearchBar from './components/SearchBar';
import useAppPagination from '@mui/material/usePagination/usePagination';

//BUG: Show only a certain amount of subscribers if searched.
//TODO: Reflect pageSize in render without API call
//TODO: Remake Pagination to be custom?

function App() {
  const [page, setPage] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(7);
  const [searchedSubs, setSearchedSubs] = React.useState<Array<{}>>([]);
  const count = Math.ceil(searchedSubs?.length / pageSize);
  const {
    data: subscribersPerPage,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetSubscribersPerPageQuery<SubscribersListResponse>({
    page,
    limit: pageSize,
  });
  const { data: allSubscribers } = useGetAllSubscribersQuery('/');

  const searchInput = useSelector((state: any) => state.search.searchInput);

  const cardsPerPage = allSubscribers.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  React.useEffect(() => {
    const matchingNames = allSubscribers?.filter((subs: any) =>
      subs.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchedSubs(matchingNames);
  }, [searchInput, allSubscribers]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const onSelectChange = (event: SelectChangeEvent) => {
    setPageSize(parseInt(event.target.value));
  };

  const theme = useTheme();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.theme.darkMode);

  if (isLoading) {
    enqueueSnackbar('Fetching data...', {
      variant: 'info',
    });
  }

  if (isError) {
    return <h1>Error occurred during fetching</h1>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

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
        {isSuccess && <SearchBar />}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {isSuccess && (
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
                  value={pageSize.toString()}
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
                count={count}
                page={page}
                onChange={handleChange}
                color='primary'
                showFirstButton={true}
                showLastButton={true}
              />
            </Box>
          )}
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
            <SubscribersList
              subscribersPerPage={
                cardsPerPage ? cardsPerPage : subscribersPerPage
              }
              isLoading={isLoading}
              allSubscribers={cardsPerPage}
            />
          </Grid>
          {isSuccess && (
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
                  value={pageSize.toString()}
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
                count={count}
                page={page}
                onChange={handleChange}
                color='primary'
                showFirstButton={true}
                showLastButton={true}
              />
            </Box>
          )}
        </Box>
      </Container>
    </CssBaseline>
  );
}

export default App;
