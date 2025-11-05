import { useEffect, useState,Suspense } from 'react';
import Login from '/src/login.jsx';
import Home from '/src/home';
import ShutDown from '/src/shutdown';
import { TailChase } from 'ldrs/react';
import 'ldrs/react/TailChase.css';
function App() {
  const [logedIn,setLogedIn] = useState(false);
  const [powerOff,setPowerOff] = useState(false);
  const [isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
    const checkMobile = () =>{
      if(window.innerWidth <= 768){
        setIsMobile(true);
      }else{
        setIsMobile(false);
      }
    }
    checkMobile();
    window.addEventListener('resize',checkMobile);
    return () => window.removeEventListener('resize',checkMobile);
  },[]);
  const handleShutDown = ()=>{
    setPowerOff(true);
    setTimeout(() => {
      setLogedIn(false);
      setPowerOff(false);
    }, 3000);
  }
    return (
        isMobile?
                (<div className='w-screen h-screen flex flex-col justify-center items-center bg-black text-white p-4 text-center'>
                  <h1 className='text-2xl font-bold mb-4'>Mobile and tablet Version Not Supported</h1>
                  <p className='text-lg'>For the best experience, please access this portfolio on a desktop or laptop computer.</p>
                </div>)
                :
                (powerOff?
                    <ShutDown/>
                    :
                    logedIn?
                    <Home setPowerOff={setPowerOff} handleShutDown={handleShutDown}/>
                    :
                    <Suspense fallback={
                      <div className='w-screen h-screen flex justify-center items-center bg-black text-white'>
                        <TailChase size="60" speed="1.75" color="white" />
                      </div>} >
                    <Login setLogedIn={setLogedIn} handleShutDown={handleShutDown}/>
                    </Suspense>)
    );
}

export default App
