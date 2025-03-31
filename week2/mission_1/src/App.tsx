import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+2)} style={{width:'200px', height:'200px', color:'black', backgroundColor:'green'}}>click!</button>
    </>
  );
};

export default App;