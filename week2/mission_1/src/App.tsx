import { useContext, useState } from "react";

useContext  

function App() {
  const [count, setCount] = useState<number>(0);
  const handleIncrease =():void=>{
    setCount(count+1);
    console.log(count);
  }
  const handleDecrease =():void =>{
    setCount(count-1);
    console.log(count);
  }
  return (
    <>
    <h1>
      {count}
    </h1>
    <button onClick={handleIncrease}>증가</button>
    <button onClick={handleDecrease}>감소</button>
    </>
  );
};

export default App;