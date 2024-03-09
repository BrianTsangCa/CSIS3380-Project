import '../App.css';
import Card from './Card';
import React from 'react';

class Content extends React.Component{
    state={
        products:[
            {
                id:"1",
                name:"Whey Protein",
                img:"https://m.media-amazon.com/images/I/61hd7FdmYCL.__AC_SX300_SY300_QL70_ML2_.jpg",
                description:"Build more strength than with regular whey protein - Contains a Research-Proven 3g dose of creatine monohydrate",
                price:"79.99",
                rating:"4"
            },
            {
                id:"2",
                name:"NAKED WHEY",
                img:"https://m.media-amazon.com/images/I/61iK9bKLiOL._AC_SL1500_.jpg",
                description:"Naked Whey no artificial sweeteners, flavors, or colors and is GMO-Free, Soy Free and Gluten-Free.",
                price:"134.99",
                rating:"3"
            },
            {
                id:"3",
                name:"Canadian Protein Vegan Protein",
                img:"https://m.media-amazon.com/images/I/71H4Xcd5zXL._AC_SL1500_.jpg",
                description:"The proteins found in each of the three sources will help to promote muscle growth and repair",
                price:"69.99",
                rating:"4"
            },
            {
                id:"4",
                name:"Premium Organic Pea Protein Powder",
                img:"https://www.plainnutrition.ca/wp-content/uploads/plain-pea-1kg.jpg",
                description:"Premium Organic Pea Protein Powder that’s all-natural, vegan, and made with just 1 ingredient. No added flavours, sweeteners, or colours. Pesticide-Free, Solvent-Free, Free of All Chemical Residues.",
                price:"39.99",
                rating:"5"
            }
        ]
    };

  render(){
    return (
        <div class="content">
            <h1>Explore Precision Scoop</h1>
            <div class="card-wrapper">
            {this.state.products.map(product=><Card id={product.id} name={product.name} img={product.img} description={product.description} price={product.price} rating={product.rating}/>)}
            </div>
        </div>
      );
  }
}

export default Content;