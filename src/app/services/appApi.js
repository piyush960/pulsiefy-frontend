import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = 'https://pulsiefy-backend.onrender.com/api'

export const appApi = createApi({
    reducerPath: "apps",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        bookAppointment: builder.mutation({
            query: (newAppointment) => ({
                url: `/book-appointment`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: newAppointment
            })
        }),
        registerForDonation: builder.mutation({
            query: (newDonor) => ({
                url: `/donor-register`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: newDonor
            })
        }),
        findHospitals: builder.mutation({
            query: (data) => ({
                url: `/nearby-hospitals`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: data
            })
        })
    })
})


export const { useBookAppointmentMutation, useRegisterForDonationMutation, useFindHospitalsMutation } = appApi