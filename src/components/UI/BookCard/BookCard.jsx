import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const BookCard = ({ book }) => {
  return (
    <>
      <div className="card max-w-md w-full bg-base-100 shadow-xl">
        <div className="text-center block">
          <figure className="min-h-36 max-w-40 mx-auto"><img className="h-100 w-100 object-cover" src={book?.bookCover} alt={book?.title} /></figure>
        </div>
        <div className="p-6 relative pb-20">
          <div className="text-center">
            <h2 className="text-center font-semibold text-xl pb-2">{book?.title}</h2>
            <h4 className='text-[#173f5fa9] pb-4'>{book?.writter}</h4>
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
            <button className="btn ">Add To Card</button>
          </div>
        </div>
      </div>
    </>
  )
}
