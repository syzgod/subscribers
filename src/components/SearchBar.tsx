import { Box, Button, FormControl, TextField } from '@mui/material';
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
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 3.5 }} />
        <TextField
          id='standard-basic'
          label='Search'
          variant='standard'
          helperText='Please enter a name or country'
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
