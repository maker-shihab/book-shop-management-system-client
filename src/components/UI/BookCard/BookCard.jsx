import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../../contexts/CartContext";
import { WishlistContext } from "../../../contexts/WishlistContext";
import useAuth from "../../../hooks/useAuth";

/* eslint-disable react/prop-types */
export const BookCard = ({ book }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const { isLoggedIn } = useAuth();
  const { addToWishlist, wishlistItems } = useContext(WishlistContext);
  const navigate = useNavigate();

  const isBookInWishlist = wishlistItems.some(item => item._id === book._id);
  const isCart = cartItems.some((item) => item._id === book._id);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      if (!isCart) {
        addToCart(book);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "This item is added Shoping Card.",
          showConfirmButton: false,
          timer: 1500
        });
      }

    } else {
      navigate('/signin');
    }
  };

  const handleAddToWishlist = () => {
    if (isLoggedIn) {
      if (!isBookInWishlist) {
        addToWishlist(book);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "This item is added wishlist.",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This item is already in the wishlist.",
        });
      }
    } else {
      navigate('/signin');
    }
  };

  return (
    <>
      <div className="card max-w-md w-full bg-base-100 shadow-xl relative">
        <button className={`btn absolute top-3 right-3 ${isBookInWishlist ? 'bg-red-300' : ''}`} onClick={handleAddToWishlist}>
          <CiHeart />
        </button>
        <div className="text-center block pt-4">
          <figure className="min-h-36 max-w-40 mx-auto"><img className="h-100 w-100 object-cover" src={book?.bookCover} alt={book?.title} /></figure>
        </div>
        <div className="p-6 pb-20 relative">
          <div className="text-center">
            <h2 className="text-center font-semibold text-xl pb-2">{book?.title}</h2>
            <h4 className='text-[#173f5fa9] pb-4'>by <Link to='#' className="hover:text-blue-400 hover:underline">{book?.writter}</Link></h4>
            <p className="pb-1">Stocks: <span className="font-bold">: {book?.inStock} </span>Items</p>
            <p className="pb-1">Conditions: <span className="font-bold">{book?.bookCondition}</span></p>
            <p className="pb-4">Price: <span>{book?.price} </span>tk</p>
            <div className="flex items-center gap-1 justify-center pb-4">
              <div className="flex items-center gap-1 text-yellow-500 max-w-28">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
              <p className="max-w-10 font-semibold text-md ">4.8</p>
            </div>
          </div>
          <div className="card-actions gap-4 justify-center absolute bottom-6 left-4 right-4">
            <Link to={`/book/${book?._id}`} className="btn ">View Details</Link>
            {
              isCart ? <><Link to="/checkout" className="btn ">Go To Cart</Link></> : <><button className="btn" onClick={handleAddToCart}>Add To Card</button></>
            }
          </div>
        </div>
      </div>
    </>
  )
}
