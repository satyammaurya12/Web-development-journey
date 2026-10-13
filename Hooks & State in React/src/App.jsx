import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");
  return (
    <div>
      <h2> My React App</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name" />
        <button onClick={()=> setShowName(name)}>Submit</button>
        <h3>Hello,{showName}</h3>
    </div>
  );
}
export default App;