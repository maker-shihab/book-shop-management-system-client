import React from 'react';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Route/Route';
import { AuthProvider } from './contexts/AuthProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
