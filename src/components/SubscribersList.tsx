import ProfileCard from './ProfileCard';

const SubscribersList = ({ cardsPerPage, isLoading }: any) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!cardsPerPage) {
    return <div>No subscribers found :(</div>;
  }

  return <ProfileCard cardsPerPage={cardsPerPage} />;
};

export default SubscribersList;
