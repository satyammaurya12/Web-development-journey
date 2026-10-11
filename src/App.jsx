import { useState } from "react";
function Student(props){
  return <h2>Hello, {props.name}! </h2>;
}
function App(){
 const [count, setCount]= useState(0);
 return(
  <div>
    <h1> My First React App </h1>
    <Student name= "satyam"/>
    <p>count : {count} </p>
    <button onClick={()=> setCount(count + 1)}> click me </button>
  </div>
 );
}
export default App;