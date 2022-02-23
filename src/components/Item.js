import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(true)

  const cartHandler = () => setCart(!cart)
  
  const addCart = cart ? "" : "in-cart"
  
  return (
    <li className={addCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartHandler} className="add">{cart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
