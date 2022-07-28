import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: (page = 1) => ({
        url: `/users?page=${page}&count=6`,
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    addUser: builder.mutation({
      query: values => ({
        url: '/users',
        method: 'POST',
        data: values,
      }),
      invalidatesTags: ['Users'],
    }),
    getToken: builder.query({
      query: () => ({
        url: '/token',
        method: 'GET',
      }),
    }),
    getPositions: builder.query({
      query: (page = 1) => ({
        url: `/positions`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useAddUserMutation,
  useLazyGetTokenQuery,
  useGetPositionsQuery,
} = usersApi;
