import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:7071/api', // Adjust this to the URL of your API service
});

export const usersApi = createApi({
    baseQuery,
    reducerPath: 'usersApi',
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/users/register',
                method: 'POST',
                body: data,
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/users/login',
                method: 'POST',
                body: data,
            })
        }),
        loginWithGoogle: builder.mutation({
            query: (data) => ({
                url: '/users/loginWithGoogle',
                method: 'POST',
                body: data,
            })
        }),
        getUserFullName: builder.mutation({
            query: (token) => ({  // Use token as a parameter
                url: '/users/getUserFullName',
                method: 'POST',
                body: { token },  // Pass userid in the body
            })
        })
    }),
});

export const { useRegisterMutation, useLoginMutation, useLoginWithGoogleMutation, useGetUserFullNameMutation } = usersApi;
