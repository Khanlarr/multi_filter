import './App.css';
import Left from './components/left';
import Right from './components/right';
import { useState,useEffect } from "react";
function App() {
  const [radio, setRadio] = useState(
    {
    "is_novu":null,
    "is_bacariq":null,
    "vezife":null,
    "position":true
  }
  );
  useEffect(()=>{
  console.log(radio);
  },[radio])
  return (
    <div className="App">
      <h1>Bütün vakansiyalar</h1>
      <p>Aktiv vakansiyaları buradan izləyə bilərsiniz.</p>
      <div className='container'>
      <Left radio={radio} setRadio={setRadio}/>
      <Right radio={radio}/>
      </div>
    </div>
  );
}

export default App;
