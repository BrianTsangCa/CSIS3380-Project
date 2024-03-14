import '../App.css';
import React from 'react';
import Header from './Header';

class Cart extends React.Component{
    state={
       
        cart:[],
    };
    render(){
  return (


<div class="cart">
<Header cart={this.state.cart}/>
</div>
  )}
}

export default Cart;