import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:7071/api', // Adjust this to the URL of your API servic
});

export const usersApi = createApi({
    baseQuery,
    reducerPath: 'usersApi',
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/users/register', // Adjust the endpoint URL accordingly
                method: 'POST',
                body: data,
            })
        })
    }),
});

export const { useRegisterMutation } = usersApi;
