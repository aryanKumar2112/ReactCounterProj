import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  
  const[count,setCount]=useState(0);
  const clickHandler=()=>{
    //setCount(count+1);
    setCount(count=>count+1);
  }
  return (
    <div className="App">
      <h1>count :{count}</h1>
      <button onClick={clickHandler}>Increase By 1</button>
      
    </div>
  );
}

export default App;
