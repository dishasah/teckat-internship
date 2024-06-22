import React, { useState, useEffect } from 'react';

const Todo:React.FC =()=> {
 
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log(`Count after this: ${count}`);
  }, [count]); 

  
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className=" TO - DO - APP BY DISHA">
      <h2> TO DO LIST </h2>
      <p>1 ST COUNT : {count}</p>
      <button onClick={incrementCount }>Increment</button>
    </div>
  );
}

export default Todo;