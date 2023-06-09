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
  CircularProgress,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import InfoModal from './InfoModal';
import { useSelector } from 'react-redux';

const ProfileCard = ({ cardsPerPage, isLoading }: any) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const searchInput = useSelector((state: any) => state.search.searchInput);

  const handleModal = (data: any) => {
    setSelectedUser(data);
    setOpen(true);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      {(searchInput > 0 || cardsPerPage).map((data: any) => (
        <Grid
          item
          sm={3}
          key={data.id}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <Card elevation={6} sx={{ minWidth: '320px' }}>
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
                  onClick={() => handleModal(data)}
                  variant='contained'
                  color='primary'
                  endIcon={<InfoIcon />}
                  size='small'
                  sx={{ marginTop: '2px' }}
                >
                  Details
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <InfoModal
        open={open}
        setOpen={setOpen}
        user={selectedUser}
        isLoading={isLoading}
      />
    </>
  );
};

export default ProfileCard;
