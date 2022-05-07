import { useState } from "react";
import './App.css';

function App() {
  const [wordCombination, setWordCombination] = useState();

  const handleClick = async () => {
    const response = await fetch("http://localhost:3001/t9/234").then((response) => response.json());
    console.log(response);
    setWordCombination(response);
  };

  const defaultCopy = "Here will appear the possible words combination";

  return (
    <div className="App">
      <h1>Click the numbers</h1>
      <h2>{wordCombination || defaultCopy}</h2>
      <button onClick={handleClick}>Check possible combinations</button>
    </div>
  );
}

export default App;
