import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = 'https://pulsiefy-backend.onrender.com/auth'

export const authApi = createApi({
    reducerPath: "auths",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        signupUser: builder.mutation({
            query: (newUser) => ({
                url: `/signup`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: newUser
            })
        }),
        loginUser: builder.mutation({
            query: (newUser) => ({
                url: `/login`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: newUser
            })
        }),
        getUserDetails: builder.mutation({
            query: (user_id) => ({
                url: `/user-details`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({user_id})
            })
        })

    })
})


export const { useSignupUserMutation, useLoginUserMutation, useGetUserDetailsMutation } = authApi