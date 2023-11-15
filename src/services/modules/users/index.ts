import { api } from '../../api';

export type User = {
  id: number;
  username: string;
  password: string;
};

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, { username: string, password: string }>({
      query: ({ username, password }) => ({
        url: `/auth/login`,
        method: 'POST',
        body: { username, password },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = userApi;
