import React, { useState } from "react";
import ShoppingList from "./ShoppingList"; // Assuming you have ShoppingList as a child component
import "./App.css"; // Your CSS file

function App() {
  // State to toggle between light and dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function to switch modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* ShoppingList Component where you pass items as a prop */}
      <ShoppingList items={[]} /> {/* Replace with actual data or a state */}
    </div>
  );
}

export default App;
