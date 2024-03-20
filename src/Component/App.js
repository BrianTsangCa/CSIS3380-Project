import '../App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Content from './Content';
import Cart from './Cart';
import Sidepanel from './SidePanel';
import React, { useState } from 'react';
import NotFound from './NotFound';


function App() {
  const [products] = useState([
    {
      id: "1",
      name: "Whey Protein",
      img: "https://cdn-vzn.yottaa.net/5ebbe9824f1bbf57c3208e08/www.gnc.ca/v~4b.25/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc-ca/default/dwdb9730ca/hi-res/499665_CAN_RIVALUS_Promasil_Isolate_Chocolate_Front.jpg?sw=305&sh=305&sm=fit&yocs=i_m_",
      description: "Build more strength than with regular whey protein - Contains a Research-Proven 3g dose of creatine monohydrate",
      price: "79.99",
      rating: "4"
    },
    {
      id: "2",
      name: "NAKED WHEY",
      img: "https://cdn-vzn.yottaa.net/5ebbe9824f1bbf57c3208e08/www.gnc.ca/v~4b.25/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc-ca/default/dw7c481aad/hi-res/427949_CAN_GHOST_Whey_Protein_Cereal_Front.png?sw=305&sh=305&sm=fit&yocs=i_m_",
      description: "Naked Whey no artificial sweeteners, flavors, or colors and is GMO-Free, Soy Free and Gluten-Free.",
      price: "134.99",
      rating: "3"
    },
    {
      id: "3",
      name: "Canadian Protein Vegan Protein",
      img: "https://cdn-vzn.yottaa.net/5ebbe9824f1bbf57c3208e08/www.gnc.ca/v~4b.25/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc-ca/default/dwa8ec1d2d/hi-res/JPEG%20-%20RGB%20High%20Res/427984_CAN%20GHOST%20Whey%20Chips%20Ahoy_Tub.jpg?sw=305&sh=305&sm=fit&yocs=i_m_",
      description: "The proteins found in each of the three sources will help to promote muscle growth and repair",
      price: "69.99",
      rating: "4"
    },
    {
      id: "4",
      name: "Premium Organic Pea Protein Powder",
      img: "https://cdn-vzn.yottaa.net/5ebbe9824f1bbf57c3208e08/www.gnc.ca/v~4b.25/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc-ca/default/dwa60efbcd/hi-res/2000px%20wide%20JPG/444423_CAN_Perfect_Sports_Diesel_Whey_Isolate_Chocolate_Mint_Front.jpg?sw=305&sh=305&sm=fit&yocs=i_m_",
      description: "Premium Organic Pea Protein Powder that’s all-natural, vegan, and made with just 1 ingredient. No added flavours, sweeteners, or colours. Pesticide-Free, Solvent-Free, Free of All Chemical Residues.",
      price: "39.99",
      rating: "5"
    },
    {
      id: "5",
      name: "Whey Protein",
      img: "https://cdn-vzn.yottaa.net/5ebbe9824f1bbf57c3208e08/www.gnc.ca/v~4b.25/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc-ca/default/dwe3f63816/hi-res/JPEG%20-%20RGB%20High%20Res/699209_1.jpg?sw=305&sh=305&sm=fit&yocs=i_m_",
      description: "Build more strength than with regular whey protein - Contains a Research-Proven 3g dose of creatine monohydrate",
      price: "79.99",
      rating: "4"
    },
    {
      id: "6",
      name: "NAKED WHEY",
      img: "https://cdn-vzn.yottaa.net/5ebbe9824f1bbf57c3208e08/www.gnc.ca/v~4b.25/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc-ca/default/dw4cbdeef2/hi-res/JPEG%20-%20RGB%20High%20Res/814750_CAN%20AMP%20Whey%20Protein%20Gold%20Chocolate_Tub.jpg?sw=305&sh=305&sm=fit&yocs=i_m_",
      description: "Naked Whey no artificial sweeteners, flavors, or colors and is GMO-Free, Soy Free and Gluten-Free.",
      price: "134.99",
      rating: "3"
    },
    {
      id: "7",
      name: "Canadian Protein Vegan Protein",
      img: "https://cdn-vzn.yottaa.net/5ebbe9824f1bbf57c3208e08/www.gnc.ca/v~4b.25/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc-ca/default/dw587142c0/hi-res/JPEG%20-%20RGB%20High%20Res/699946_web_CAN%20GNC%20Pro%20Performance%20Whey%20ISO%20Burst%20Chocolate_Front_Tub.jpg?sw=305&sh=305&sm=fit&yocs=i_m_",
      description: "The proteins found in each of the three sources will help to promote muscle growth and repair",
      price: "69.99",
      rating: "4"
    }
    // Rest of your products
  ]);
  const [showSidepanel, setShowSidepanel] = useState(false);
const [cartItems, setCartItems] = useState([]);

const toggleSidepanel = () => {
  console.log('Toggling side panel:', !showSidepanel); // Verify state update
  setShowSidepanel(true);
};

const handleAddCart = (product) => {
  setCartItems([...cartItems, product]);
  toggleSidepanel();
};

  return (
    <div>
      <Routes>
        <Route path="/" element={<Content addCart={handleAddCart} />} />
        <Route path="/Home" element={<Content addCart={handleAddCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showSidepanel && <Sidepanel cartItems={cartItems} onClose={toggleSidepanel} />}
      
    </div>
  );
}

export default App;