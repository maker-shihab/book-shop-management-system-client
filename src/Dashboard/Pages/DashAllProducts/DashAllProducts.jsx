import { useEffect, useState } from "react";
import bookApi from "../../../api/bookApi";
import BookCardTwo from "../../../components/UI/BookCardTwo/BookCardTwo";
import useAuth from "../../../hooks/useAuth";

const DashAllProducts = () => {
  const { userInfo } = useAuth();
  const authorId = userInfo?._id;
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookApi.getAllBooksBySeller(authorId);
        setBooks(response?.data?.data);
      } catch (error) {
        console.error('Error fetching new release books:', error);
      }
    };
    fetchBooks();
  }, [authorId]);

  return (
    <div>
      <div>
        <h2 className="text-white font-semibold text-5xl p-6">My Books 📚</h2>
        <div>
          <div className='grid grid-col md:grid-cols-4 gap-6 py-10'>
            {books.map(book => (
              <BookCardTwo key={book._id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashAllProducts