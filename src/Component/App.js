import '../App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Content from './Content';
import Cart from './Cart';
import Sidepanel from './SidePanel';
import React, { useState } from 'react';
import NotFound from './NotFound';


function App() {
  const [showSidepanel, setShowSidepanel] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleSidepanel = () => {
    setShowSidepanel(!showSidepanel);
  };
  const handleAddCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
    toggleSidepanel(); // Show the side panel when adding an item
  };
  
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Content addCart={handleAddCart} />} />
        <Route path="/Home" element={<Content addCart={handleAddCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showSidepanel && <Sidepanel cartItems={cartItems} onClose={toggleSidepanel} />}
      <button onClick={toggleSidepanel}>Cart</button>
    </div>
  );
}

export default App;
