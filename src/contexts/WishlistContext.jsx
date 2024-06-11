// WishlistContext.js
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  useEffect(() => {
    const storedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems'));
    if (storedWishlistItems) {
      setWishlistItems(storedWishlistItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item) => {
      setWishlistItems([...wishlistItems, item]);    
  };

  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter((item) => item._id !== itemId);
    setWishlistItems(updatedWishlist);   
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};