import homeBg from '/src/assets/img/home-screen.jpg';
import windows from '/src/assets/img/icons8-windows-11-48.png';
import { useState,useRef} from 'react';
import { motion } from "motion/react";
import Windows from '/src/windows';
import AppWindow from '/src/appWindow';
import Modal from '/src/modal';
import {appList,desktopApp,taskBarApp,recommedApp} from '/src/data.js'
export default function Home(props){
    const [showModal,setShowModal] = useState(false); 
    const [windowsOpen,setWindowsOpen] = useState(false);
    const [openApps,setOpenApps] = useState([]);
    const handleOpenApp = newApp =>{
        if(newApp.link){
            window.open(newApp.link,'_blank')
        }else if(newApp.tab){
            setOpenApps(prev =>{
                if(prev.find(app =>app.name === newApp.name)) return prev;
                return [...prev , { name: newApp.name ,
                 icon: newApp.icon ,
            }]
            });
        }
    }
    const handleCloseApp = name =>{
        setOpenApps(prev=>prev.filter(app=>app.name !== name))
    }
    const container = useRef(null);


    return(
        <section ref={container} className="relative w-screen h-screen bg-cover bg-center overflow-hidden" style={{backgroundImage:`url(${homeBg})`}}>
            <Modal showModal={showModal} />
            <div className='w-1/6 h-3/4 grid grid-cols-2 grid-rows-6 gap-y-3.5 p-2 pr-22'>
            {
                desktopApp.map(app=>(
                <div key={app.name} onClick={()=>handleOpenApp(app)}  className='flex flex-col items-center justify-center rounded-sm hover:backdrop-blur-2xl hover:bg-neutral-300/20' >
                    <img className='w-12' src={app.icon} alt="app icon" />
                    <p className= 'text-white text-[12px]'>{app.name}</p>
                    
                </div>
                ))
            }
            </div>
            <Windows appList={appList} recommedApp={recommedApp} handleOpenApp={handleOpenApp} handleShutDown={props.handleShutDown} windowsOpen={windowsOpen} /> 
            <div className='absolute bottom-0 left-0 z-10 border-t border-gray-800 backdrop-blur-xl bg-black/80 w-full h-12 flex justify-center items-center gap-2'>
            <div className={`w-10 p-1 rounded-lg hover:backdrop-blur-2xl hover:bg-white/20 ${windowsOpen?'bg-white/20 backdrop-blur-2xl':''}`} >
                <motion.img onClick={()=> setWindowsOpen(prev => !prev)} whileTap={{scale:0.8}} src={windows} alt="windows icon" />
            </div>
                {
                    taskBarApp.map(app=>(
                                <div key={app.name} className='w-10 p-1 rounded-lg hover:backdrop-blur-2xl hover:bg-white/20' >
                                    <motion.img onClick={()=> handleOpenApp(app)} whileTap={{scale:0.8}} src={app.icon} alt="app icon" />
                                </div>
                    ))
                } 
            </div>
            {openApps.length > 0 &&
               openApps.map(app => (
                    <AppWindow
                        key={app.name}
                        app={app}
                        container={container}
                        handleCloseApp={handleCloseApp}
                        setShowModal={setShowModal}
                        />
    ))
}
        </section>
    )
}