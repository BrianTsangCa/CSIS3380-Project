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
  console.log('Toggling side panel:', !showSidepanel); // Verify state update
  setShowSidepanel(!showSidepanel);
};

const handleAddCart = (product) => {
  setCartItems([...cartItems, product]);
  toggleSidepanel();
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
      
    </div>
  );
}

export default App;