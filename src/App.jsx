import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Forms} from "./components/Forms"
import {FormsData} from "./components/FormsData"


function App() {
  const [count, setCount] = useState(true)

  return (
    <div className="App">
      <button onClick={() => {
        setCount(count ? false:true)
      } }>{count ? "Add Employee" : "Show Employees"}</button>
      {count ? <FormsData/> : <Forms/>}
        {/* <Forms/>
        <FormsData/> */}
    </div>

  );
}

export default App;
