import { Box, Button, FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchBar = ({ data, isLoading, isSuccess }: any) => {
  const [searchResults, setSearchResults] = React.useState('Norman');

  if (isSuccess) {
    console.log(data.map((items: any) => items.name.includes(searchResults)));
  }

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchResults(e.target.value);
    console.log(searchResults);
  };

  //   if (!isLoading) {
  //     const searchResult = data.map((subs: any) =>
  //       subs.filter((subs: any) => subs.id.includes(searchResults))
  //     );
  //
  //     console.log(searchResult);
  //   }

  return (
    <FormControl>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 3.5 }} />
        <TextField
          id='standard-basic'
          label='Search'
          variant='standard'
          helperText='Please enter a name or country'
          value={searchResults}
          onChange={handleSearch}
        />
      </Box>
      <Button variant='contained' sx={{ marginTop: '10px' }}>
        Search
      </Button>
    </FormControl>
  );
};

export default SearchBar;
