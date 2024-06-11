import { useContext, useState } from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [quantitys, setQuantitys] = useState(cartItems.reduce((acc, item) => {
    acc[item._id] = 1;
    return acc;
  }, {}));

  const handleRemoveFromCart = (itemId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(itemId);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        // Remove the quantity entry for the delete Item
        setQuantitys(prev => {
          const newQuentitys = { ...prev };
          delete newQuentitys[itemId];
          return newQuentitys;
        })
      }
    });
  };

  const bookQuantityPlus = (itemId, inStock) => {
    setQuantitys(prev => {
      const newQuentity = prev[itemId] + 1;
      if (newQuentity > inStock) {
        Swal.fire({
          title: "Out of Stock",
          text: `Only ${inStock} items in stock.`,
          icon: "warning",
        });
        return prev;
      }
      return {
        ...prev,
        [itemId]: newQuentity
      }
    })
  }

  const bookQuantityMinus = (itemId) => {
    setQuantitys(prev => {
      if (prev[itemId] - 1 < 1) {
        Swal.fire({
          title: "Warning",
          text: "Do you want to remove this book?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, remove it!"
        }).then((result) => {
          if (result.isConfirmed) {
            handleRemoveFromCart(itemId);
          }
        });
        return prev;
      }
      return {
        ...prev,
        [itemId]: prev[itemId] - 1
      }
    })
  }

  const handleSubmit = () => {
    alert("We are working on it!");
  }
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      return acc + (item.price * quantitys[item._id]);
    }, 0);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-20">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
        <div className="grid grid-cols-3 gap-6">
          {/* Cart items */}
          <div className="col-span-2">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b border-gray-300 py-3"
              >
                <div>
                  {/* <input type="checkbox" className="checkbox" id={item._id} name={item._id} /> */}
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${(item.price * quantitys[item._id]).toFixed(2)}</p>
                </div>

                <div>
                  <button
                    onClick={() => bookQuantityPlus(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaPlus />
                  </button>
                  <input type="text" value={quantitys[item._id]} readOnly />
                  <button
                    onClick={() => bookQuantityMinus(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaMinus />
                  </button>
                </div>

                <button
                  onClick={() => handleRemoveFromCart(item._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          {/* Order summary */}
          <form onSubmit={handleSubmit}>
            <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <p>Subtotal:</p>
                <p>${calculateSubtotal()}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="border-t border-gray-300 py-2">
                <div className="flex justify-between font-semibold">
                  <p>Total:</p>
                  <p>${calculateSubtotal()}</p>
                </div>
              </div>
              <button
                className={`mt-4 w-full py-2 rounded-md ${cartItems.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                disabled={cartItems.length === 0}
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
