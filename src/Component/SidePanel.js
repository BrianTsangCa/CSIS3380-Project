import React from 'react';

const SidePanel = ({ cartItems, onClose }) => {
  const sidepanelClass = `sidepanel ${cartItems.length > 0 ? 'open' : 'closed'}`;

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

export default SidePanel;