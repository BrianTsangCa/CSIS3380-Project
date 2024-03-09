import '../App.css';

function Card() {
  return (
<div class="card">
  <img src="https://m.media-amazon.com/images/I/61hd7FdmYCL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="product" class="card-image"/>
  <div class="container">
    <h4><b>Whey Protein</b></h4>
    <p class="description">About this item
      Build more strength than with regular whey protein - Contains a Research-Proven 3g dose of creatine monohydrate, which helps to build more strength than regular whey protein
      Better macronutrient profile - doesn't pack the extra sugar and carbs you'll see in other protein powders with only 4g of carbs, depending on the flavor, and no more than 2.5g of fat!
      Cold microfiltration process to remove more fat, carbs & lactose - Our whey protein has been filtered using Multi-Phase Filtration Technology for less fat, lactose and impurities
      Tested for quality and purity - to ensure a high standard of QUALITY and purity, each batch undergoes strict quality control, and is third-party lab Tested and verified to ensure quality
    </p>
    <div class="footer">
      <span class="price">$29.99</span>
      <span class="rating">⭐⭐⭐⭐</span>
      <button class="purchase-button">Purchase</button>
    </div>
  </div>
</div>
  );
}

export default Card;