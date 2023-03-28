import { Box, Button, FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchBar = ({ data, isSuccess }: any) => {
  const [inputText, setInputText] = React.useState('');

  if (isSuccess && inputText) {
    const matchingItems = data.filter((item: any) =>
      item.name.toLowerCase().includes(inputText.toLowerCase())
    );
    const matchingNames = matchingItems.map((item: any) => item.name);
    console.log(matchingNames);
  }

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <FormControl>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 3.5 }} />
        <TextField
          id='standard-basic'
          label='Search'
          variant='standard'
          helperText='Please enter a name or country'
          value={inputText}
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
