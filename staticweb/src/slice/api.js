import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_FUNCTION_URL;

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: 'testapi',
  tagTypes: ["Test"],
  endpoints: (build) => ({
    getResponse: build.query({
      query: () => ({
        url: 'testing', // Adjust the URL as needed
      }),
      providesTags: ["Test"]
    }),
  }),
});

export const { useGetResponseQuery } = api;
