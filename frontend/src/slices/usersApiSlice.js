// Desc: This file contains the logic for making API requests to the backend for user authentication and user management.
//       It uses the `createApi` function from the `@reduxjs/toolkit/query/react` package to create an API slice with endpoints for login, register, logout, profile, getUsers, deleteUser, getUserDetails, and updateUser.
//       The API slice is then exported along with the generated hooks for each endpoint, which can be used in React components to make API requests.
//       The `useGetUsersQuery` hook is used in the `UserListScreen` component to fetch a list of users from the backend and display them in a table.
//       The `useDeleteUserMutation` hook is used to delete a user from the backend when the delete button is clicked in the `UserListScreen` component.
//       The `useLoginMutation`, `useRegisterMutation`, `useLogoutMutation`, `useProfileMutation`, `useGetUserDetailsQuery`, and `useUpdateUserMutation` hooks can be used in other components to perform user authentication and management operations.


import { USERS_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST'
      })
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
      }),
      providesTags: ['User'],
      keepUnusedDataFor: 5,
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'DELETE',
      }),
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    

  }),
});

export const { 
  useLoginMutation, 
  useLogoutMutation, 
  useRegisterMutation, 
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserDetailsQuery,
  useUpdateUserMutation
 } = usersApiSlice;