import { useState } from 'react';
import {
  SubscribersListResponse,
  useListSubscribersQuery,
} from './services/subscribers';
import { Pagination, Box } from '@mui/material';
import ProfileCard from './ProfileCard';

const SubscribersList = ({ subscribers, isLoading }: any) => {
  console.log(subscribers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!subscribers) {
    return <div>No subscribers found :(</div>;
  }

  return (
    <>
      <ProfileCard data={subscribers} />
    </>
  );
};

export default SubscribersList;
