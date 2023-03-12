import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ProfileCard from './components/ProfileCard';

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const dataFetch = () => {
      fetch('https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber')
        .then((response) => response.json())
        .then((data) => setData(data));
      console.log(data);
    };
    dataFetch();
  }, []);

  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          {data && data.map((profile: any) => <ProfileCard data={profile} />)}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
