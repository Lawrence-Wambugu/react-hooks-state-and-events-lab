import React, { useState } from "react";
import Item from "./Item"; // Importing the Item component

function ShoppingList({ items }) {
  // State to store the selected category from the dropdown
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter the items based on the selected category
  const filteredItems = items.filter((item) => {
    if (!selectedCategory) return true; // Show all items if no category is selected
    return item.category === selectedCategory;
  });

  return (
    <div>
      {/* Dropdown to select category */}
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
        {/* You can add more categories here */}
      </select>

      {/* List of filtered items */}
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
