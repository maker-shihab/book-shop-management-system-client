import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookCardTwo = ({ bookItem }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{bookItem?.title}</h2>
        <h4 className="font-semibold">{bookItem?.writter}</h4>
        <div>
          {/* Stars */}
          <span>{bookItem?.ratting?.count}</span>
        </div>
        <h4 className="font-semibold">{bookItem?.price}Tk</h4>
        <h4>{bookItem?.inStock} In Stock</h4>
        <div className="card-actions pt-6">
          <Link to={`/book/${bookItem?._id}`} className="btn btn-success text-white">View Details</Link>
          <button type="button" className="btn btn-success text-white">Add To Card</button>
        </div>
      </div>
    </div>
  )
}

export default BookCardTwo;