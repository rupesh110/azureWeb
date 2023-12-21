import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:7071/api';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: 'api',
  tagTypes: ['Test'],
  endpoints: (build) => ({
    getResponse: build.query({
      query: () => 'httpTrigger2',
      providesTags: ['Test'],
    }),
  }),
});

export const { useGetResponseQuery } = api;
