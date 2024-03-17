import '../App.css';
import React from 'react';

const Card = ({ product, addCart, toggleSidePanel  }) => {
  const handleAddToCart = () => {
    addCart(product);
    toggleSidePanel(); // Toggle the side panel when adding to cart
  };

  return (
    <div className="card">
      <img src={product.img} alt="product" className="card-image" />
      <div className="container">
        <h4><b>{product.name}</b></h4>
        <p className="description">{product.description}</p>
        <div className="footer">
          <span className="price">${product.price}</span>
          {Array.from({ length: product.rating }, (_, index) => (
            <span key={index}>⭐</span>
          ))}
        </div>
      </div>
      <div>
        <button className="purchase-button" onClick={handleAddToCart}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
