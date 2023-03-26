import { Box, Button, FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useFormControl } from '@mui/material/FormControl';
import React from 'react';

const SearchBar = () => {
  const { focused } = useFormControl() || {};

  if (focused) {
    console.log('This field is being focused');
  }

  return (
    <FormControl>
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
    </FormControl>
  );
};

export default SearchBar;
