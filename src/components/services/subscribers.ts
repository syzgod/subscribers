import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Subscribers, ListResponse } from '../../interfaces/fetchInterfaces';

const url = 'https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber';

export const subscribers = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    getAllSubscribers: builder.query({
      query: () => '/',
    }),
  }),
});

export type SubscribersListResponse = ListResponse<Subscribers>;

export const { useGetAllSubscribersQuery } = subscribers;
