import {  useState } from 'react';
import { motion,useDragControls } from "motion/react";
import maxWindow from '/src/assets/img/window-maximize-svgrepo-com.svg';
import minWindow from '/src/assets/img/window-minimize-svgrepo-com.svg';
import exit from '/src/assets/img/icons8-exit-32.png';
import AboutMe from '/src/aboutMe';
import Projects from '/src/porject';
import Explorer from '/src/explorer';

export default function AppWindow({ app, container, handleCloseApp,setShowModal }) {

    const [size,setSize] = useState('w-4/6 h-4/6');
    const [initialPostion] = useState(()=>{
        const random = Math.floor(Math.random() * 51) +50;
        return { x: random, y: random };
    })
    const [position,setPosition] = useState(initialPostion);
    const dragControl = useDragControls()
    const handleDrag = (e) => {
        if(size === 'w-4/6 h-4/6'){
            dragControl.start(e)
        }
    }

    const handleWindow = () => {
        if(size === 'w-4/6 h-4/6'){
            setSize('w-screen h-screen');
            setPosition({x:0 , y:0})
        }else{
            setSize('w-4/6 h-4/6');
            setPosition(initialPostion)
        }
    }
    const checkPostion = (e,info) =>{
        const threshold = 20;
        if(info.point.x < threshold || info.point.y < threshold || info.point.x > window.innerWidth - threshold){
            setShowModal(true);
        }else{
            setShowModal(false); 
    }
    }
    const handleDargEnd = (e,info) =>{
         const threshold = 20;
        if(info.point.x < threshold || info.point.y < threshold || info.point.x > window.innerWidth - threshold){
            setPosition({x:0 , y:0});
            setSize('w-screen h-screen');
            setShowModal(false);
        }
    }
    return (
        <motion.div
            drag
            dragListener={false}
            onDrag={checkPostion}
            onDragEnd={handleDargEnd}
            dragControls={dragControl}
            dragMomentum={false}
            dragConstraints={container} 
            className={`draggable absolute top-0 left-0 flex flex-col ${size} ${size === 'w-screen h-screen'?'z-30':''}` } 
            dragElastic={1}
            animate={{x:position.x, y:position.y,transition:{type:"tween",duration:0.2}}}
        >
            <div onPointerDown={handleDrag} className='bg-black/40 backdrop-blur-2xl h-8 flex justify-between items-center'>
                <img src={app.icon} alt='app icon' className='h-full p-1'/>
                <div className='h-full flex'>
                    <img onClick={handleWindow} src={size === 'w-4/6 h-4/6'? maxWindow : minWindow} alt="maximize window icon" className='h-full p-2 cursor-default hover:backdrop-blur-2xl hover:bg-white/20' />
                    <img onClick={()=>handleCloseApp(app.name)} src={exit} alt="exit icon" className='h-full p-1.5 hover:backdrop-blur-2xl hover:bg-red-400 cursor-default' />
                </div>
            </div>
            <div className='flex-1 w-full overflow-auto'>
                {app.name === 'About me' && <AboutMe />}
                {app.name === 'Projects' && <Projects />}
                {app.name === 'Explorer' && <Explorer />}
            </div>
        </motion.div>
    )
}
