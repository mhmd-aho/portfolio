import { useEffect, useState } from 'react';
import Login from '/src/login.jsx';
import Home from '/src/home';
import ShutDown from '/src/shutdown';
function App() {
  const [logedIn, setLogedIn] = useState(false);
  const [powerOff, setPowerOff] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
 useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
  const handleShutDown = () => {
    setPowerOff(true);
    setTimeout(() => {
      setLogedIn(false);
      setPowerOff(false);
    }, 3000);
  }

  if (isMobile) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-black text-white p-6 text-center gap-4">
        <h1 className="text-2xl font-semibold">
          Mobile Version Recommended
        </h1>

        <p className="text-white/70 max-w-md">
          This portfolio is optimized for desktop screens.
          For the best mobile experience, please visit the mobile version below.
        </p>

        <a
          href="https://mhmd-aho.github.io/mobile-protfolio"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Open Mobile Portfolio
        </a>

        <p className="text-sm text-white/40 mt-2">
          Desktop features may not display correctly on mobile devices.
        </p>
      </div>
    );
  }

  if (powerOff) {
    return <ShutDown />;
  }

  return logedIn ? (
    <Home setPowerOff={setPowerOff} handleShutDown={handleShutDown} />
  ) : (
    <Login setLogedIn={setLogedIn} handleShutDown={handleShutDown} />
  );
}

export default App;