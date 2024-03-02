import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { CartProvider } from './stores/Context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
  <React.StrictMode>
   <CartProvider>
    <App />
   </CartProvider>
  </React.StrictMode>
</Router>
)
