import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };
  const handleSubmit = () => {
    alert("We are working on it!"); 
  }
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
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>
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
              <p>${cartItems.reduce((acc, curr) => acc + curr.price, 0)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="border-t border-gray-300 py-2">
              <div className="flex justify-between font-semibold">
                <p>Total:</p>
                <p>${cartItems.reduce((acc, curr) => acc + curr.price, 0)}</p>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
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
