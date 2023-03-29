import ProfileCard from './ProfileCard';

const SubscribersList = ({ subscribers, isLoading }: any) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!subscribers) {
    return <div>No subscribers found :(</div>;
  }

  return <ProfileCard data={subscribers} />;
};

export default SubscribersList;
