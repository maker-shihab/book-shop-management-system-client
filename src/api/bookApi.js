import { axiosBaseQuery } from '../helpers/axios/baseQuery';

export const bookApi = {
  getAllNewBooks: async () =>
    axiosBaseQuery({
      url: `/books/new`,
      method: 'GET'
    }),
  getFeaturedBook: async () =>
    axiosBaseQuery({
      url: `/books/featured/all`,
      method: 'GET'
    }),

  getAllBooks: async () =>
    axiosBaseQuery({
      url: `/books`,
      method: 'GET'
    }),
  getSingleBook: async (bookId) =>
    axiosBaseQuery({
      url: `/books/${bookId}`,
      method: 'GET',
      data: bookId
    }),
  getAllBooksBySeller: async (id) =>
    axiosBaseQuery({
      url: `/books/author/${id}`,
      method: 'GET'
    }),

  addBook: async (credentials) =>
    axiosBaseQuery({
      url: `/books/create`,
      method: 'POST',
      data: credentials
    }),
};

export default bookApi;