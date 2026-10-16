import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  const students = ["Aman", "Riya", "Rahul", "Priya"];
  return (
    <div>
      <h2> Student List </h2>
      <button onClick={() => setShow(!show)}>{show ? "hide Students" : "show student"} </button>
      {show && (<ul>
        {students.map((student, index) => (<li key={index}>{student}</li>))}
      </ul>)}
    </div>
  );
}
export default App;