import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBasketShopping } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import bookApi from "../../api/bookApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const BookSingle = () => {
  const { id } = useParams();
  if (!id) {
    toast.error("Book fetch problem");
  }
  const [book, setBook] = useState();
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookApi.getSingleBook(id);
        setBook(response?.data?.data);
      } catch (error) {
        console.error('Error fetching new release books:', error);
      }
    };
    fetchBooks();
  }, [id]);
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="hero py-14">
          <div className="hero-content flex-col lg:flex-row gap-4 items-start justify-center">
            <div className="w-2/5 text-center">
              <img src={book?.bookCover} className="max-w-sm rounded-lg shadow-2xl mx-auto" />
            </div>
            <div className="w-3/5 pt-5">
              <h1 className="text-3xl font-bold">{book?.title} <small className="font-normal text-xl">(Hardcover)</small></h1>
              <h4 className="pt-4 mb-4"><span>by </span><strong className="text-xl font-semibold">{book?.writter}</strong></h4>
              <p className="mb-4"> <kbd className="kbd kbd-lg">Category: {book?.category}</kbd></p>
              <p className="mb-4"> <kbd className="kbd kbd-lg">Price: {book?.price} tk</kbd></p>
              <p className="mb-4"> <kbd className="kbd kbd-lg">Stocks: {book?.inStock} Items</kbd></p>
              {
                book?.isDonated && (
                  <p className="mb-4"> <kbd className="kbd kbd-lg">Donation: Available</kbd></p>
                )
              }
              <p className=""> <kbd className="kbd kbd-lg">Book Condition: {book?.bookCondition}</kbd></p>
              <p className="py-6 text-lg">{book?.description}</p>
              <button className="btn btn-neutral">Add To Card <FaBasketShopping /></button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default BookSingle;