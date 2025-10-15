import { useState } from 'react';
import Login from '/src/login.jsx';
import Home from './home';
import ShutDown from './shutdown';
function App() {
  const [logedIn,setLogedIn] = useState(true);
  const [powerOff,setPowerOff] = useState(false);
  const handleShutDown = ()=>{
    setPowerOff(true);
    setTimeout(() => {
      document.body.innerHTML = ''
    }, 3000);
  }
    return (
      (
        powerOff?
        <ShutDown/>
        :
        logedIn?
        <Home setPowerOff={setPowerOff} handleShutDown={handleShutDown}/>
        :
        <Login setLogedIn={setLogedIn} handleShutDown={handleShutDown}/>
      )
  )
}

export default App
