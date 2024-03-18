import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState({})
  const addToCart = (item) => {
    setCart((currentCart) => {
      const updatedCart = { ...currentCart };
      if (updatedCart[item]) {
        updatedCart[item] += 1;
      } else {
        updatedCart[item] = 1;
      }
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return Object.keys(cart).reduce((total, itemKey) => {
      const itemPrice = bakeryData.find((item) => item.name === itemKey).price;
      return total + (cart[itemKey] * itemPrice);
    }, 0);
  };

  return (
    <div className="App">
      
      <div className="menu">
        <div className="menuTitle">
          <h1>My Bakery</h1> {}
        </div>
        <div className="menuBody">
          {bakeryData.map((item, index) => (
            <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} display={addToCart}></BakeryItem> // replace with BakeryItem component
          ))}
        </div>
      </div>

      <div className="cart">
        <h2>Cart</h2>
        <ul className="cartContents" style={{ listStyleType: 'none' }}>
          {Object.keys(cart).map((itemKey) => (
            <li id="cartItemList" key={itemKey}>
              {bakeryData.find((item) => item.name === itemKey).name}: {cart[itemKey]}
    
            </li>
          ))}
        </ul>
        <p id="price">Total Price: ${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
