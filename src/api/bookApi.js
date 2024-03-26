import { axiosBaseQuery } from '../helpers/axios/baseQuery';

export const bookApi = {
  getAllNewBooks: async () =>
    axiosBaseQuery({
      url: `/books/new`,
      method: 'GET'
    }),
    getFeaturedBook: async () =>
    axiosBaseQuery({
      url: `/books/featured`,
      method: 'GET'
    }),
  getAllBooks: async () =>
    axiosBaseQuery({
      url: `/books`,
      method: 'GET'
    }),
};

export default bookApi;