import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userService = createApi({
  reducerPath: 'users',
  tagTypes: ['data'],
  refetchOnMountOrArgChange: true,
  refetchOnFocus: 'always',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_BASEURL}`,
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: `/clientes`,
        method: 'GET',
      }),
      providesTags: ['data'],
    }),
    getUser: builder.query({
      query: (id) => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: `/cliente/${id}`,
        method: 'GET',
      }),
      providesTags: ['data'],
    }),
    createUser: builder.mutation({
      query: (body) => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: '/cliente',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['data'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        headers: {
          'Content-type': 'application/json',
        },
        url: `/cliente/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['data'],
    }),
    updateUser: builder.mutation({
      query: (value) => {
        const { body, id } = value;
        return {
          headers: {
            'Content-type': 'application/json',
          },
          url: `/cliente/${id}`,
          method: 'PUT',
          body: body,
        };
      },
      invalidatesTags: ['data'],
    }),
  }),
});
export const {
  useGetAllUserQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userService;
