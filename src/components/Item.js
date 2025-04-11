import React, { useState } from "react";

function Item({ name, category }) {
  // State to keep track of whether the item is in the cart or not
  const [inCart, setInCart] = useState(false);

  // Function to toggle the cart status
  const toggleCartStatus = () => {
    setInCart(!inCart); // Toggle the cart status
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <button onClick={toggleCartStatus}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
