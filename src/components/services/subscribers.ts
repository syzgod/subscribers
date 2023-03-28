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
  page: number;
  limit: string;
  totalPages: number;
  totalItems: number;
  isSuccess: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: Error;
}

const url = 'https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber';

export const subscribers = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    getSubscribers: builder.query<
      ListResponse<Subscribers>,
      { page?: number; limit?: number }
    >({
      query: ({ page = 1, limit = '7' }) => `?page=${page}&limit=${limit}`,
    }),
    getAllSubscribers: builder.query({
      query: () => '/',
    }),
  }),
});

export type SubscribersListResponse = ListResponse<Subscribers>;

export const { useGetSubscribersQuery, useGetAllSubscribersQuery } =
  subscribers;
