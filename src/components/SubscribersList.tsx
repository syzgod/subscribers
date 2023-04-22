import ProfileCard from './ProfileCard';
import { Skeleton } from '@mui/material';

const SubscribersList = ({ cardsPerPage, isLoading }: any) => {
  if (isLoading) {
    return (
      <>
        <Skeleton
          variant='circular'
          height={30}
          width={30}
          sx={{ marginRight: '10px' }}
        />
        <Skeleton variant='rectangular' height={30} width={210} />
        <Skeleton variant='rectangular' width='100%' height='100%' />
      </>
    );
  }

  if (!cardsPerPage) {
    return <div>No subscribers found :(</div>;
  }

  return <ProfileCard cardsPerPage={cardsPerPage} />;
};

export default SubscribersList;
