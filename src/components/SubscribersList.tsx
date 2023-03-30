import ProfileCard from './ProfileCard';

const SubscribersList = ({
  subscribersPerPage,
  allSubscribers,
  isLoading,
}: any) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!subscribersPerPage) {
    return <div>No subscribers found :(</div>;
  }

  return (
    <ProfileCard
      allSubscribers={allSubscribers}
      subscribersPerPage={subscribersPerPage}
    />
  );
};

export default SubscribersList;
