/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import bookApi from "../api/bookApi";

const BooksContext = createContext();

export const useBooks = () => {
  return useContext(BooksContext);
};

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await bookApi.getAllBooks();
        if (response.data.success) {
          setBooks(response.data.data);
        } else {
          setError("Failed to fetch books");
        }
      } catch (err) {
        setError("An error occurred while fetching books");
      } finally {
        setLoading(false);
      }
    }
    getAllBooks();
  }, []);
  return (
    <BooksContext.Provider value={{ books, loading, error }}>
      {children}
    </BooksContext.Provider>
  )
}