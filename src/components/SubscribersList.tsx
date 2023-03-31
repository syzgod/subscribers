import ProfileCard from './ProfileCard';

const SubscribersList = ({ subscribersPerPage, isLoading }: any) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!subscribersPerPage) {
    return <div>No subscribers found :(</div>;
  }

  return <ProfileCard subscribersPerPage={subscribersPerPage} />;
};

export default SubscribersList;
