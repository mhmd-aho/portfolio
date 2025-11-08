import { motion,AnimatePresence } from "motion/react";
import wifi from '/src/assets/img/icons8-wifi-30.png';
import arrow from '/src/assets/img/icons8-arrow-30-1.png';
import volume from '/src/assets/img/icons8-volume-30.png';
import sun from '/src/assets/img/icons8-sun-30.png';
import battery from '/src/assets/img/icons8-battery-30.png';
import settings from '/src/assets/img/icons8-settings-30.png';
import blueTooth from '/src/assets/img/icons8-bluetooth-30.png';
import airPlane from '/src/assets/img/icons8-plane-30.png';
import energy from '/src/assets/img/icons8-energy-drink-30.png';
import share from '/src/assets/img/icons8-share-30.png';
import eye from '/src/assets/img/icons8-eye-30.png';
const variant = {
        hidden:{
            y:'100%',
            transition:{type:'tween',duration:0.2,ease:'easeOut'}
        },
        visible:{
            y:0,
            transition:{type:'tween',duration:0.2,ease:'easeOut'}
        }
}
export default function Setting({setting,setBrightness,brightness,setNightMode,nightMode}){
    return(
            <AnimatePresence>
                {
                    setting &&
                    <div className='h-96 w-90 overflow-y-hidden absolute bottom-15 right-3.5 z-50'>
                        <motion.div variants={variant}  initial='hidden' animate='visible' exit='hidden' className='w-full h-full flex flex-col rounded-lg  overflow-hidden  text-white border border-white/20 shadow-lg shadow-black/30'>
                            <div className="h-1/2  backdrop-blur-3xl  bg-neutral-800 flex justify-baseline items-baseline flex-wrap gap-3 p-5">
                              <div className="flex flex-col justify-center items-center gap-2">
                                  <button className="flex border border-white/20 rounded overflow-hidden shadow-2xs">
                                        <img loading="lazy" src={wifi} alt="wifi icon" className="w-12 h-12 border-r border-white/20 p-4 bg-indigo-300 hover:brightness-125"/>
                                        <img loading="lazy" src={arrow} alt="arrow icon" className="w-12 h-12 p-4  bg-indigo-300 hover:brightness-125"/>
                                  </button>
                                  <p className="text-sm font-light">WI-FI</p>
                              </div>
                              <div className="flex flex-col justify-center items-center gap-2">
                                  <button className="flex border border-white/20 rounded overflow-hidden shadow-2xs">
                                        <img loading="lazy" src={blueTooth} alt="wifi icon" className="w-12 h-12 border-r border-white/20 p-4 hover:bg-white/20"/>
                                        <img loading="lazy" src={arrow} alt="arrow icon" className="w-12 h-12 p-4 hover:bg-white/20"/>
                                  </button>
                                  <p className="text-sm font-light">Bluetooth</p>
                              </div>   
                              <div className="flex flex-col justify-center items-center gap-2">
                                  <button className="w-24 h-12 flex justify-center items-center overflow-hidden border  border-white/20  hover:bg-white/20 rounded shadow-2xs">
                                        <img loading="lazy" src={airPlane} alt="airplane icon" className="w-12 h-12 p-4"/>
                                  </button>
                                  <p className="text-sm font-light">Airplane mode</p>
                              </div> 
                              <div className="flex flex-col justify-center items-center gap-2" >
                                  <button className="w-24 h-12 flex justify-center items-center overflow-hidden border  border-white/20  hover:bg-white/20 rounded shadow-2xs">
                                        <img loading="lazy" src={energy} alt="power saving icon" className="w-12 h-12 p-4 rotate-90"/>
                                  </button>
                                  <p className="text-sm font-light">Energy saver</p>
                              </div>  
                              <div className="flex flex-col justify-center items-center gap-2">
                                  <button className="w-24 h-12 flex justify-center items-center overflow-hidden border  border-white/20  hover:bg-white/20 rounded shadow-2xs">
                                        <img loading="lazy" src={share} alt="share icon" className="w-12 h-12 p-4"/>
                                  </button>  
                                  <p className="text-sm font-light">Nearby sharing</p>
                              </div>
                              <div className="flex flex-col justify-center items-center gap-2">
                                  <button onClick={()=>setNightMode(prev=>!prev)} className={`w-24 h-12 flex justify-center items-center border overflow-hidden  border-white/20 ${nightMode?'bg-indigo-300 hover:brightness-125':'bg-transparent hover:bg-white/20'} rounded overflow-hidden shadow-2xs`}>
                                        <img loading="lazy" src={eye} alt="eye icon" className="w-12 h-12 p-4"/>
                                  </button> 
                                  <p className="text-sm font-light">Night light</p>
                              </div>
                            </div>
                            <div className="h-2/6 flex flex-col justify-baseline gap-2 p-5 bg-neutral-800">
                                 <div className="flex justify-baseline items-center gap-2">
                                    <label className="h-10 w-10 flex justify-center items-center p-2 rounded hover:bg-white/20" htmlFor="brightness"><img loading="lazy" src={sun} alt="brightness icon" /></label>
                                    <input type="range" id="brightness" name="brightness" min="0" max="100"  className="w-3/4  accent-indigo-300" onChange={(e)=>setBrightness(e.target.value)} value={brightness}/>
                                 </div>
                                 <div className="flex justify-baseline items-center gap-2">
                                    <label className="h-10 w-10 flex justify-center items-center pl-3 p-2 rounded hover:bg-white/20" htmlFor="volume"><img loading="lazy" src={volume} alt="volume icon" /></label>
                                    <input type="range" id="volume" name="volume" min="0" max="100" className="w-3/4  accent-indigo-300"/>
                                 </div>
                            </div>
                            <div className="bg-neutral-900 h-1/6 p-3 flex justify-between items-center">
                                <div className="w-2/12 h-full hover:bg-white/20 flex justify-center items-center gap-1 rounded">
                                    <img loading="lazy" className="w-5 h-5" src={battery} alt="battery icon" />
                                    <p className="text-[12px]">90%</p>
                                </div>
                                <div className="w-10 h-full rounded p-3 hover:bg-white/20 flex justify-center items-center">
                                    <img loading="lazy"  src={settings} alt="settings icon"/> 
                                </div>
                            </div>
                        </motion.div>
                    </div>
                }
            </AnimatePresence>

    )
}