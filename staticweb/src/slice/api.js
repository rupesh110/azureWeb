import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_FUNCTION_URL;

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
