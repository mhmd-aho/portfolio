import homeBg from '/src/assets/img/home-screen.webp';
import windows from '/src/assets/img/icons8-windows-11-48.png';
import { useState,useRef,useMemo,useEffect} from 'react';
import {  motion } from "motion/react";
import Windows from '/src/windows';
import AppWindow from '/src/appWindow';
import Modal from '/src/modal';
import Rightclicked from '/src/rightClicked';
import {appList,desktopApp,taskBarApp,recommedApp} from '/src/data.js';
import fullTrash from '/src/assets/img/icons8-full-bin-windows-48.png';
import wifi from '/src/assets/img/icons8-wifi-30.png';
import battery from '/src/assets/img/icons8-battery-30.png';
import volume from '/src/assets/img/icons8-volume-30.png';
import Setting from '/src/setting.jsx';
export default function Home(props){
    const [showModal,setShowModal] = useState(false); 
    const [windowsOpen,setWindowsOpen] = useState(false);
    const [openApps,setOpenApps] = useState([]);
    const [rightclicked,setRightclicked] = useState(false);
    const [DeletedApps,setDeletedApps] = useState([]);
    const [isActive,setIsActive] = useState(null);
    const [now,setNow] = useState(new Date());
    const [setting,setSetting] = useState(false);
    const [brightness,setBrightness] = useState(100);
    const [nightMode,setNightMode] = useState(false);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setNow(new Date());
        },60000);
        return () => clearInterval(timer);
    },[]);
    const hour = now.getHours();
    const min = now.getMinutes();
    const date = now.getDate()
    const month = now.getMonth();
    const year = now.getFullYear();
    const displayedMin = min < 10? `0${min}` : min;
    const displayedHour = hour === 0 || hour === 12 ? 12 : hour % 12; 
    const period = hour >= 12 ? 'PM' : 'AM';
    const handleOpenApp = newApp =>{
        if(newApp.link){
            window.open(newApp.link,'_blank')
        }else if(newApp.tab){
            setOpenApps(prev =>{
                if(prev.find(app =>app.name === newApp.name)) return prev;
                setIsActive(newApp.name);
                return [...prev , { name: newApp.name ,
                 icon: newApp.icon}]
            });
        }
    }
    const handleCloseApp = name =>{
        setOpenApps(prev=>prev.filter(app=>app.name !== name))
    }
    const container = useRef(null);
    const handleRightClick = (e,name) =>{
        e.preventDefault();
        rightclicked?setRightclicked(null):setRightclicked(name)
    } 
    const desktopApps = useMemo(()=>{
        return desktopApp.filter(app=>!DeletedApps.includes(app.name))
    },[DeletedApps]);
    const trashApps = useMemo(()=>{
        return desktopApp.filter(app=>DeletedApps.includes(app.name))
    },[DeletedApps]);
    const taskBarApps = useMemo(()=>{
        return [...taskBarApp,...openApps.filter(app2=>!taskBarApp.some(app1=>app1.name === app2.name))]
    },[openApps])
    useEffect(()=>{
        if(openApps.length === 0){
            setIsActive(null);
        }
    },[openApps])

    return(
        <section ref={container} className='relative w-screen h-screen bg-cover bg-center overflow-hidden' style={{backgroundImage:`url(${homeBg})`,filter:`brightness(${brightness}%) ${nightMode?'saturate(0.5)':''}`}}>
            <Modal showModal={showModal} />
            <div className='w-1/6 h-3/4 grid grid-cols-2 grid-rows-6 gap-y-3.5 p-2 pr-22'>
            {
                desktopApps.map(app=>(
                <button onContextMenu={e=>handleRightClick(e,app.name)} key={app.name} onClick={()=>handleOpenApp(app)}  className='flex flex-col items-center justify-center rounded-sm hover:backdrop-blur-2xl hover:bg-neutral-300/20' >
                    <img loading='lazy' className='w-12' src={app.name === 'Trash'? DeletedApps.length > 0? fullTrash : app.icon :app.icon} alt="app icon" />
                    <p className= 'text-white text-[12px]'>{app.name}</p>
                    <Rightclicked setDeletedApps={setDeletedApps} app={app.name} rightclicked={rightclicked} />
                </button>
                ))
            }
            </div>
            <Windows appList={appList} recommedApp={recommedApp} handleOpenApp={handleOpenApp} handleShutDown={props.handleShutDown} windowsOpen={windowsOpen} /> 
            <div className='absolute bottom-0 left-0 border-t border-gray-800 backdrop-blur-xl bg-black/80 w-full h-12 flex justify-center items-center gap-2 z-50'>
            <motion.div
            onClick={()=> setWindowsOpen(prev => !prev)}
            animate={windowsOpen ?
                {backgroundColor:'#ffffff20',
                transition:{duration:0.3}} :
                {backgroundColor:'transparent',
                transition:{duration:0.3}}}
            whileHover={{backgroundColor:'#ffffff20'}} 
            className='group w-10 p-2 rounded-lg' >
                <motion.img className='w-full h-full  group-active:scale-80 transition-all duration-200' loading='lazy' src={windows} alt="windows icon" />
            </motion.div>
                {
                    taskBarApps.map(app=>(
                                <motion.button key={app.name}
                                 onClick={()=>{
                                    openApps.some(openApp => openApp.name === app.name) ?
                                    setIsActive(app.name) :
                                    handleOpenApp(app)
                                } }
                                animate={isActive === app.name ?
                                    {backgroundColor:'#ffffff20',
                                    transition:{duration:0.3}} :
                                    {backgroundColor:'transparent',
                                    transition:{duration:0.3}}}
                                whileHover={{backgroundColor:'#ffffff20'}}
                                className='group relative w-10 p-2 rounded-lg' >
                                    <motion.img loading='lazy' className='w-full h-full group-active:scale-80 transition-all duration-300'  src={app.icon} alt="app icon" />
                                        {openApps.some(openApp => openApp.name === app.name) &&
                                        <motion.div 
                                        animate={isActive === app.name ? 
                                            {scaleX:2,
                                            backgroundColor:'oklch(70.4% 0.191 10.216)',
                                            transition:{duration:0.3}} :
                                            {scaleX:1,
                                            backgroundColor:'#ffffff20',
                                            transition:{duration:0.3}}}
                                        className='absolute bottom-0  h-1 w-2 rounded-[1px] left-1/2 -translate-x-1/2 '/>}
                                </motion.button>
                    ))
                }
                <div className='absolute right-1 h-10 text-sm flex gap-1 '>
                   <button onClick={()=>setSetting(prev=>!prev)} className='flex gap-2 items-center hover:bg-white/20 px-2 rounded-sm'>
                        <img loading='lazy' className='h-5' src={wifi} alt="wifi icon" />
                        <img loading='lazy' className='h-6' src={volume} alt="volume icon" />
                        <img loading='lazy' className='h-5' src={battery} alt="battery icon" />
                   </button>
                    <Setting setting={setting} setBrightness={setBrightness} brightness={brightness} setNightMode={setNightMode} nightMode={nightMode} />
                   <div className='flex flex-col hover:bg-white/20 text-white/50 px-2 justify-baseline items-end rounded-sm'>
                    <p>{displayedHour}:{displayedMin} {period}</p>
                    <p>{month+1}/{date}/{year}</p>
                   </div>
                </div>
            </div>
            {openApps.length > 0 &&
               openApps.map(app => (
                    <AppWindow
                        key={app.name}
                        app={app}
                        container={container}
                        handleCloseApp={handleCloseApp}
                        setShowModal={setShowModal}
                        trashApps={trashApps}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        DeletedApps={DeletedApps}
                        />
    ))
}
        </section>
    )
}