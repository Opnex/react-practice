import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      
      <h2 className="count-display">Count: {count}</h2>
      

      <div className="button-group">
        <button className="btn btn-increment" onClick={increment}>
          +
        </button>
        <button className="btn btn-decrement" onClick={decrement}>
          -
        </button>
        <button className="btn btn-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;