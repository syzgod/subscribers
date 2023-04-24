import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #c2c2c2',
  boxShadow: 24,
  p: 4,
};

const InfoModal = ({ open, setOpen, user }: any) => {
  if (!user) {
    return null;
  }

  const handleClose = () => setOpen(false);
  const dateFormatter = (date: string) => {
    const unformattedDate = new Date(date);
    return unformattedDate.toLocaleString();
  };

  return (
    <Box>
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
            {user?.name}
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
              Created: {dateFormatter(user.accounts[0]?.created)}
            </Typography>
            <Typography>
              Account name: {user.accounts[0]?.name || 'no data'}
            </Typography>
            <Typography>
              Account balance: {user.accounts[0]?.balance || 'no data'}
            </Typography>
            Subscriber ID: {user.accounts[0]?.subscriberId || 'no data'}
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
              Created: {dateFormatter(user.calls[0]?.created)}
            </Typography>
            <Typography>
              Account name: {user.calls[0]?.name || 'no data'}
            </Typography>
            <Typography>
              Account balance: {user.calls[0]?.balance || 'no data'}
            </Typography>
            Subscriber ID: {user.calls[0]?.subscriberId || 'no data'}
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
    </Box>
  );
};

export default InfoModal;
