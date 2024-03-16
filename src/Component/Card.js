import '../App.css';
import React from 'react';


function Card(props) {
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
        <div><button className="purchase-button" onClick={() => props.addCart(props.ProductId)}>Add</button></div>
      </div>
    </div>


  );
}

export default Card;

