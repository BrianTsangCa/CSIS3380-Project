import React, { useEffect } from 'react';

const Sidepanel = ({ cartItems, onClose }) => {
  const sidepanelClass = `sidepanel ${cartItems.length > 0 ? 'open' : 'closed'}`;

  useEffect(() => {
    console.log('cartItems.length after update:', cartItems.length); // Log here (optional)
  }, [cartItems]);
  
  return (
    <div className={sidepanelClass}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close Cart</button>
    </div>
    
  );
};

export default Sidepanel;