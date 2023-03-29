import { Box, Button, Modal, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.default',
  border: '2px solid #c2c2c2',
  boxShadow: 24,
  p: 4,
};

const InfoModal = ({ open, setOpen, data, isLoading, isSuccess }: any) => {
  const handleClose = () => setOpen(false);

  const dateFormatter = (date: string) => {
    const unformattedDate = new Date(date);
    return unformattedDate.toLocaleString();
  };

  if (isLoading) {
    enqueueSnackbar('Fetching data...', { variant: 'info' });
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    enqueueSnackbar('Data fetched!', { variant: 'success' });
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h4'
          component='span'
          sx={{ fontWeight: 'bold' }}
        >
          {data.name}
        </Typography>
        <Typography
          id='modal-modal-description'
          sx={{ mt: 2 }}
          component={'section'}
        >
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold' }}
            component={'span'}
          >
            Accounts:{' '}
          </Typography>
          <Typography>
            Created: {dateFormatter(data.accounts[0]?.created)}
          </Typography>
          <Typography>Account name: {data.accounts[0]?.name}</Typography>
          <Typography>Account balance: {data.accounts[0]?.balance}</Typography>
          Subscriber ID: {data.accounts[0]?.subscriberId}
        </Typography>
        <Typography
          id='modal-modal-description'
          sx={{ mt: 2 }}
          component={'section'}
        >
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold' }}
            component={'span'}
          >
            Calls:{' '}
          </Typography>
          <Typography>
            Created: {dateFormatter(data.calls[0]?.created)}
          </Typography>
          <Typography>Account name: {data.calls[0]?.name}</Typography>
          <Typography>Account balance: {data.calls[0]?.balance}</Typography>
          Subscriber ID: {data.calls[0]?.subscriberId}
        </Typography>
        <Button
          variant='contained'
          color='primary'
          sx={{ mt: '10px' }}
          onClick={handleClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default InfoModal;
