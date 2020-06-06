import React, {useState}from 'react';
import './App.css';

import Routes from './routes';

function App() {
  const [counter, setCounter] = useState(0);

  function clic(){
    setCounter(counter+1);
  }

  return (    
   <Routes/>
  );
}

export default App;
