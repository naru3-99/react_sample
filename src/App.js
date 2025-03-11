import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleAddCounter = (e) => {
    setCount(count + 1);
  };
  const getCount = (e) => {
    return count;
  }

  return (
    <>
      <div><button onClick={handleAddCounter}>add counter</button></div>
      <div>current count: {getCount()}</div>
    </>
  );
};

export default App;
