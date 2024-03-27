import React from 'react';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Route/Route';
import { AuthProvider } from './contexts/AuthProvider';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
