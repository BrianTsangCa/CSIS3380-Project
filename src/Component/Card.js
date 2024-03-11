import '../App.css';
import Modal from "./Modal";
import React, { useState } from 'react';


function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (


<div class="card">
  <img src={props.img} alt="product" class="card-image"/>
  <div class="container">
    <h4><b>{props.name}</b></h4>
    <p class="description">{props.description}</p>
    <div class="footer">
      <span class="price">${props.price}</span>
      {Array.from({ length: props.rating }, (_, index) => (
    <span key={index}>⭐</span>
    ))}
          <button className="purchase-button" onClick={openModal}>Purchase</button>

    </div>

  </div>
  <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Modal content goes here */}
        <h2>Confirm Purchase</h2>
        <p>Are you sure you want to purchase {props.name}?</p>
        <button onClick={closeModal}>Cancel</button>
        <button>Confirm Purchase</button>
      </Modal>
  </div>

  
  );
}

export default Card;