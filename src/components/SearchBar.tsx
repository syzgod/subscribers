import { Box, FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchInput } from '../store/reducers/searchSlice';

const SearchBar = () => {
  const searchInput = useSelector((state: any) => state.value);
  const dispatch = useDispatch();

  return (
    <FormControl>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
        <TextField
          id='standard-basic'
          label='Search for name'
          variant='standard'
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setSearchInput(e.target.value))
          }
        />
      </Box>
    </FormControl>
  );
};

export default SearchBar;
