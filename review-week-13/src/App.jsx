import React, { useState } from "react";
import FruitList from "./components/FruitList";
import PositiveMessage from "./PositiveMessage";

function App() {
  const [totalFruits, setTotalFruits] = useState(0);
  // This is the goal for the number of fruits to be eaten per day
  const [goal, setGoal] = useState(5);
  const [message, setMessage] = useState("Let's start eating healthy!");

  const handleTotalChange = (newTotalFruits) => {
    setTotalFruits(newTotalFruits);
   
  };
  const handleMessageChange = (newTotalFruits) => {
    setMessage((message) => {
      if (newTotalFruits >= goal) {
        setMessage(`🎉 Congratulations! `);
      } else if (newTotalFruits < goal) {
        setMessage(`"Keep going! ${goal} to go!"`);
      }
      handleMessageChange()
    });
  };

  return (
    <>
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <h1>🍎 Healthy Eating Tracker</h1>
        <FruitList
          fruits={["Feijoa", "Apple", "Avocado", "Orange", "Banana"]}
          onTotalChange={handleTotalChange}
        />
        <PositiveMessage onTotalChange={handleMessageChange}/>
      </div>
    </>
  );
}

export default App;
