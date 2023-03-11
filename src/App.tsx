import React from 'react';
import { Container, Grid } from '@mui/material';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
