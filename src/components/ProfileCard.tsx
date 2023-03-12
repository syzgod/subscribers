import React from 'react';
import { Card, Grid, Box, Paper, Typography } from '@mui/material';

const ProfileCard = ({ data }: any) => {
  console.log(data);
  return (
    <Grid item xs={3}>
      <Paper elevation={4}>
        <img src={data.avatar} alt='' />
        <Box padding={1}>
          {data.name}
          <Typography variant='h6'>{data.city}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProfileCard;
