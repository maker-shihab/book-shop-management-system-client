import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { WishlistContext } from "../../contexts/WishlistContext";


const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const removeFromWishlistItem = (itemId) => {
    removeFromWishlist(itemId);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold mb-8">Wishlist</h1>
        {wishlistItems?.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols md:grid-cols-3 gap-4">
            {
              wishlistItems.map((item) => (
                <div key={item?._id} className="card max-w-md w-full bg-base-100 shadow-xl relative">
                  <div className="text-center block pt-4">
                    <figure className="min-h-36 max-w-40 mx-auto"><img className="h-100 w-100 object-cover" src={item?.bookCover} alt={item?.title} /></figure>
                  </div>
                  <div className="p-6 pb-20 relative">
                    <div className="text-center">
                      <h2 className="text-center font-semibold text-xl pb-2">{item?.title}</h2>
                      <h4 className='text-[#173f5fa9] pb-4'>{item?.writter}</h4>
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
                      <button className="btn btn-error text-white" onClick={() => removeFromWishlistItem(wishlistItems._id)}>Remove Wish Card</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Wishlist
