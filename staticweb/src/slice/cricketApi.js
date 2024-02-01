import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:7071/api', // Adjust this to the URL of your API service
  //baseUrl: 'https://azurewebapi.azurewebsites.net/api'
});

export const cricketApi = createApi({
  baseQuery,
  reducerPath: 'cricketApi',
  endpoints: (builder) => ({
    getTeam: builder.mutation({
      query: () => ({
        url: '/cricket/getTeam',
        method: 'GET',
        // Remove the 'body' property for a GET request
      }),
    }),
    getScheduledMatch: builder.mutation({
      query: () => ({
        url: '/cricket/matchSchedule',
        method: 'GET',
        // Remove the 'body' property for a GET request
      }),
    }),
  }),
});

export const { useGetTeamMutation, useGetScheduledMatchMutation } = cricketApi;
