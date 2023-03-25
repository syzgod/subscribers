import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Subscribers {
  name: string;
  country: string;
  city: string;
  address: string;
  avatar: string;
  id: string;
  accounts: Account[];
  calls: Account[];
}

interface Account {
  created: string;
  name: string;
  balance: number;
  id: string;
  subscriberId: string;
}

interface ListResponse<T> {
  data: T[];
  isLoading: boolean;
  isFetching: boolean;
}

const url = 'https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber/';

export const subscribers = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    listSubscribers: builder.query<ListResponse<Subscribers>, number | void>({
      query: (page = 1) => `?page=${page}&limit=7`,
    }),
  }),
});

export type SubscribersListResponse = ListResponse<Subscribers>;

export const { useListSubscribersQuery } = subscribers;
