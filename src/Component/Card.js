import '../App.css';
import React from 'react';


function Card(props) {
  const handleAddToCart = () => {
    console.log('Add to cart clicked for:', props.name);
    props.addCart({
      id: props.ProductId,
      name: props.name,
      img: props.img,
      description: props.description,
      price: props.price,
      rating: props.rating
    }); 
  };

  return (
    <div class="card">
      <img src={props.img} alt="product" class="card-image" />
      <div class="container">
        <h4><b>{props.name}</b></h4>
        <p class="description">{props.description}</p>
        <div class="footer">
          <span class="price">${props.price}</span>
          {Array.from({ length: props.rating }, (_, index) => (
            <span key={index}>⭐</span>
          ))}
        </div>
        <div>
          <button
            className="purchase-button"
            onClick={handleAddToCart}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;