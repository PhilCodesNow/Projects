import React, { useState } from 'react';
import './App.css';



function App() {

  const [count, setCount] = useState(() => {
    return 0
  })

  function decremenCount() {
    setCount(prevCount => prevCount - 1)

  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }


  return (
    <div className="app">
      <>
      <button onClick={decremenCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      </>
    </div>
  );
}

export default App;
