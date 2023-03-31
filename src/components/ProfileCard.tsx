import { useState } from 'react';

import {
  Grid,
  Box,
  Card,
  Typography,
  Button,
  CardHeader,
  Avatar,
  CardContent,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import InfoModal from './InfoModal';
import { useSelector } from 'react-redux';

const ProfileCard = ({ subscribersPerPage, isLoading }: any) => {
  const [open, setOpen] = useState(false);
  const searchInput = useSelector((state: any) => state.search.searchInput);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (searchInput > 0 || subscribersPerPage).map((data: any) => (
    <Grid item xs={5} md={3} sm={3} lg={3} key={data.id}>
      <Card elevation={6}>
        <CardHeader
          titleTypographyProps={{ variant: 'h5' }}
          avatar={
            <Avatar
              alt={data.name}
              src={data.avatar}
              sx={{ width: 70, height: 70 }}
            />
          }
          title={data.name}
          sx={{ fontSize: '20px' }}
        ></CardHeader>
        <CardContent>
          <Box>
            <Typography>ID: {data.id}</Typography>
            <Typography>Country: {data.country}</Typography>
            <Typography>City: {data.city}</Typography>
            <Typography variant='body2'>Address: {data.address}</Typography>
            <Button
              onClick={() => setOpen(true)}
              variant='contained'
              color='primary'
              endIcon={<InfoIcon />}
              size='small'
              sx={{ marginTop: '2px' }}
            >
              Details
            </Button>
            <InfoModal
              open={open}
              setOpen={setOpen}
              data={data}
              isLoading={isLoading}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ));
};

export default ProfileCard;
