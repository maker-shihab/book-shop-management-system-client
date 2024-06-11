import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Route/Route';
import { AuthProvider } from './contexts/AuthProvider';
import { BooksProvider } from "./contexts/BooksContext";
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BooksProvider>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </BooksProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
