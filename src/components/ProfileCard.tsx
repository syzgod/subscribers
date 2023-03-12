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

const ProfileCard = ({ data }: any) => {
  console.log(data);
  return (
    <Grid item xs={3}>
      <Card elevation={4} sx={{ maxHeight: '250px' }}>
        <CardHeader
          avatar={
            <Avatar
              alt={data.name}
              src={data.avatar}
              sx={{ width: 70, height: 70 }}
            />
          }
          title={data.name}
          subheader={data.id}
          sx={{ fontSize: '20px' }}
        ></CardHeader>
        <CardContent>
          <Box>
            <Typography variant='body2'>City: {data.city}</Typography>
            <Typography variant='body1'>Country: {data.country}</Typography>
            <Button
              variant='contained'
              color='secondary'
              endIcon={<InfoIcon />}
            >
              Details
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProfileCard;
