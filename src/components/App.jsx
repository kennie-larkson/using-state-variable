import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(15);

  const increase = () => setCount(count + 1);

  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default App;
