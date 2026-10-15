import { useRef } from "react";
function App(){
  const inputRef = useRef(null);
  function handleFocus(){
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>UseRef Practice</h1>
      <input type="text" ref={inputRef} placeholder="Enter your name" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
export default App;