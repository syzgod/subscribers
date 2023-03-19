import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  id: number;
  name: string;
}
interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

export const subscribersApi = createApi({
  reducerPath: 'subscribersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://604868d1b801a40017ccdac6.mockapi.io/api/v1/',
  }),
  endpoints: (builder) => ({
    getAllSubscribers: builder.query({
      query: () => 'subscriber',
    }),
  }),
});

export const { useGetAllSubscribersQuery } = subscribersApi;
