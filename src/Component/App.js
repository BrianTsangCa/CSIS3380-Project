import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from './Content';
import Cart from './Cart';
import SidePanel from './SidePanel'; // Correct import statement
import NotFound from './NotFound';

function App() {
  const [showSidePanel, setShowSidePanel] = useState(true); // Set to true by default
  const [cartItems, setCartItems] = useState([]);

  const toggleSidePanel = () => {
    setShowSidePanel(prevShowSidePanel => !prevShowSidePanel);
  };

  const handleAddCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
    toggleSidePanel(); // Show the side panel when adding an item
  };

  return (
    <div>
      {showSidePanel && <SidePanel cartItems={cartItems} onClose={toggleSidePanel} />}
      <Routes>
        <Route path="/" element={<Content addCart={handleAddCart} />} />
        <Route path="/Home" element={<Content addCart={handleAddCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
