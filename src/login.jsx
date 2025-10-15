import { useState} from 'react';
import loginBg from '/src/assets/img/lock-screen.jpg';
import sun from '/src/assets/img/icons8-sun.svg';
import map from '/src/assets/img/map.jpg';
import user from '/src/assets/img/usericon.webp'
import power from '/src/assets/img/icons8-power-button-50.png';
import { useEffect } from 'react';
import { TailChase } from 'ldrs/react';
import 'ldrs/react/TailChase.css';
import { AnimatePresence, motion} from "motion/react";
import { div } from 'motion/react-client';
export default function Login(props) {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();
  const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const displayedYear = year % 100;
  const displayedMonth = months[month];
  const displayedDay = week[day];
  const displayedMin = min < 10? `0${min}` : min;
  const displayedHour = hour === 0 || hour === 12 ? 12 : hour % 12; 
  const [anyMove,setAnyMove] = useState(false);
  const [loading,setLoading] = useState(false)
  const handleSubmit = e =>{
    e.preventDefault(); 
      setLoading(true)
      setTimeout(()=>props.setLogedIn(true),3000)
  }
  useEffect(()=>{
    if(anyMove) return;
    const handleActivity = () => setAnyMove(true);
    document.addEventListener('keydown',handleActivity);
    document.addEventListener('click',handleActivity);
    return () =>{
      document.removeEventListener('keydown',handleActivity);
      document.removeEventListener('click',handleActivity);
    }
  },[anyMove])

    return (
      <motion.section animate={anyMove?{backdropFilter:'blur(200px)',transition:{duration:0.1,delay:0.1}}:{backdropFilter:'blur(0px)',transition:{duration:1}}}   
      style={{backgroundImage:`url(${loginBg})`}} 
      className='w-screen h-screen bg-cover bg-center flex flex-col justify-between items-center overflow-hidden'>
      <AnimatePresence>
          {
            anyMove ?
              <motion.div key='login' initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.1}}} exit={{opacity:0}}  className='h-full w-full backdrop-blur-md flex flex-col justify-center items-center p-16 '>
                <div className='w-1/6 flex flex-col justify-center items-center gap-4 '>
                  <div className='h-44 w-44 bg-white rounded-full p-3'>
                    <img src={user} alt="user icon" />
                  </div>
                  <p className='text-xl text-white font-semibold'>Mohamad PC</p>
                  <form onSubmit={handleSubmit} className='w-full h-fit relative flex flex-col justify-center items-center'>
                    {loading ?
                      <div className='flex flex-col items-center justify-center gap-3'>
                          <TailChase size="40" speed="1.75" color="white" />
                          <p className='text-3xl text-white'>Welcome</p>
                      </div>
                    :
                    <div  className='bg-gray-300/20 backdrop-blur-2xl  w-32 h-8 p-0.5  flex justify-center items-center text-white rounded-lg border-3 border-gray-400' >
                      <button type='submit' className='w-full h-full hover:border-2 hover:border-gray-400/40 flex justify-center items-center pb-1 rounded-md'>sign in</button>
                    </div>
                    }
                  </form>
                </div>
                <img onClick={props.handleShutDown} src={power} alt="" className=' absolute bottom-8 right-8 w-8'  />
          </motion.div>
          :
          <motion.div exit={{y:'-100vh',transition:{duration:0.1}}} className='h-full w-full flex flex-col justify-between items-center p-24 '>
              <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-8xl  text-white font-semibold'>{displayedHour}:{displayedMin}</p>
                <p className='text-lg text-white'>{displayedDay}, {displayedMonth} {displayedYear}</p>
              </div>
              <div className='flex justify-between items-center w-4/5'>
                <div className='backdrop-blur-xl bg-black/20 w-64 h-32 rounded p-3 flex flex-col justify-between items-baseline'>
                  <p className='text-white font-semibold'>New York</p>
                  <div className='text-white font-semibold flex justify-between items-center w-full px-1'>
                    <div className='flex justify-baseline items-center'>
                      <img src={sun} className='w-12' />
                      <p className='text-5xl flex justify-baseline items-center'>5 <span className='text-sm self-baseline'>c</span></p>
                    </div>
                    <p className='text-sm' >Special <br /> Weather</p>
                  </div>
                  <p className='text-gray-300 self-center'>see more</p>
                </div>
                <div className='backdrop-blur-xl bg-black/20 w-64 h-32 rounded p-3 flex flex-col justify-between items-baseline'>
                  <p className='text-white font-semibold'>Markets</p>
                  <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col justify-baseline items-baseline text-sm'>
                      <p className='text-white'>SAP 500</p>
                      <p className='text-green-300'>+0.47%</p>
                      <p className='text-white'>5,249,27</p>
                    </div>
                    <div className='flex flex-col justify-baseline items-baseline text-sm'>
                      <p className='text-white'>DOW</p>
                      <p className='text-green-300'>+0.77%</p>
                      <p className='text-white'>39,817,84</p>
                    </div>
                    <div className='flex flex-col justify-baseline items-baseline text-sm'>
                      <p className='text-white'>NASDAQ</p>
                      <p className='text-green-300'>+0.29%</p>
                      <p className='text-white'>16,416,60</p>
                    </div>
                  </div>
                  <p className='text-gray-300 self-center'>see more</p>
                </div>
                <div className='backdrop-blur-xl bg-black/20 w-64 h-32 rounded p-3 flex flex-col justify-between items-baseline'>
                  <p className='text-white font-semibold'>Traffic near you</p>
                  <div className='w-full flex justify-between items-center'>
                    <img src={map} alt="" className='w-1/2 h-auto ' />
                    <div className='text-white text-sm'>
                      <p>New York</p>
                      <p className='text-amber-300'>Moderate traffic</p>
                    </div>
                  </div>
                  <p className='text-gray-300 self-center'>see more</p> 
                </div>
                <div className='backdrop-blur-xl bg-black/20 w-64 h-32 rounded p-3 flex flex-col justify-between items-baseline'>
                  <p className='text-white font-semibold'>Trending in NBA</p>
                  <div className='flex justify-between items-center w-full'>
                    <div className='text-white text-sm w-2/5'>
                    <p className='text-[10px]'>01:00AM</p>
                    <div className='flex justify-between items-center'>
                      <div>
                        <p>Pelicans</p>
                        <p>Magic</p>  
                      </div>
                      <div>
                        <p>0</p>
                        <p>0</p>
                      </div>
                    </div>
                    </div>
                    <div className='text-white text-sm w-2/5'>
                    <p className='text-[10px]'>01:00AM</p>
                    <div className='flex justify-between items-center'>
                      <div>
                        <p>Kings</p>
                        <p>Wizardsa</p>  
                      </div>
                      <div>
                        <p>0</p>
                        <p>0</p>
                      </div>
                    </div>
                    </div>
                  </div>
                  <p className='text-gray-300 self-center'>see more</p> 
                </div>
              </div>

          </motion.div>
          }

      </AnimatePresence>
      </motion.section>
    );
}