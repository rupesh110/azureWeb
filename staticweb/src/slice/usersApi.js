import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NODE_ENV === 'production'
        ? 'https://azurewebapi.azurewebsites.net/api'
        : 'http://localhost:7071/api/',
    headers: {
        // Include any required headers here
        'Content-Type': 'application/json',
        // Add other headers as needed
    },
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
                url: '/users/loginMedia',
                method: 'POST',
                body: data,
            })
        }),
        getUserFullName: builder.mutation({
            query: (token) => ({  // Use token as a parameter
                url: '/users/userFullname',
                method: 'POST',
                body: { token },  // Pass userid in the body
            })
        }),
        getTest: builder.mutation({
            query: (data) => ({
                url: '/test',
                method: 'GET',
                body: data,
            })
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useLoginWithGoogleMutation, useGetUserFullNameMutation, useGetTestMutation } = usersApi;
