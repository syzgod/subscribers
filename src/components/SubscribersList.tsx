import ProfileCard from './ProfileCard';
import { Box, Grid, Skeleton } from '@mui/material';

const SubscribersList = ({ cardsPerPage, isLoading }: any) => {
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Skeleton
            variant='circular'
            height={30}
            width={30}
            sx={{ marginRight: '10px' }}
          />
          <Skeleton variant='rounded' height={30} width={210} />
        </Box>
        <Skeleton
          variant='text'
          height={30}
          width={210}
          sx={{ marginLeft: '40px' }}
        />
        <Skeleton variant='rounded' height={40} width={600} />
        <Grid container spacing={4} sx={{ marginBottom: '30px' }}>
          <Grid item sx={{ marginTop: '40px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Skeleton
                variant='circular'
                height={70}
                width={70}
                sx={{ marginRight: '10px' }}
              ></Skeleton>
              <Skeleton variant='rounded' height={30} width={170}></Skeleton>
            </Box>
            <Skeleton variant='rounded' height={30} width={150}></Skeleton>
            <Skeleton variant='rounded' height={30} width={150}></Skeleton>
            <Skeleton variant='rounded' height={30} width={100}></Skeleton>
          </Grid>
          <Grid item sx={{ marginTop: '40px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Skeleton
                variant='circular'
                height={70}
                width={70}
                sx={{ marginRight: '10px' }}
              ></Skeleton>
              <Skeleton variant='rounded' height={30} width={170}></Skeleton>
            </Box>
            <Skeleton variant='rounded' height={30} width={150}></Skeleton>
            <Skeleton variant='rounded' height={30} width={150}></Skeleton>
            <Skeleton variant='rounded' height={30} width={100}></Skeleton>
          </Grid>
          <Grid item sx={{ marginTop: '40px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Skeleton
                variant='circular'
                height={70}
                width={70}
                sx={{ marginRight: '10px' }}
              ></Skeleton>
              <Skeleton variant='rounded' height={30} width={170}></Skeleton>
            </Box>
            <Skeleton variant='rounded' height={30} width={150}></Skeleton>
            <Skeleton variant='rounded' height={30} width={150}></Skeleton>
            <Skeleton variant='rounded' height={30} width={100}></Skeleton>
          </Grid>
          <Grid item sx={{ marginTop: '40px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Skeleton
                variant='circular'
                height={70}
                width={70}
                sx={{ marginRight: '10px' }}
              ></Skeleton>
              <Skeleton variant='rounded' height={30} width={170}></Skeleton>
            </Box>
            <Skeleton variant='rounded' height={30} width={150}></Skeleton>
            <Skeleton variant='rounded' height={30} width={150}></Skeleton>
            <Skeleton variant='rounded' height={30} width={100}></Skeleton>
          </Grid>
        </Grid>
        <Skeleton variant='rounded' height={40} width={600} />
      </Box>
    );
  }

  if (!cardsPerPage) {
    return <div>No subscribers found :(</div>;
  }

  return <ProfileCard cardsPerPage={cardsPerPage} />;
};

export default SubscribersList;
