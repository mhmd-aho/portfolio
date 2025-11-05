import {  useState,lazy,Suspense } from 'react';
import { motion,useDragControls } from "motion/react";
import exit from '/src/assets/img/icons8-exit-32.png';
const AboutMe = lazy(() => import('/src/aboutMe'));
const Projects = lazy(() => import('/src/projects'));
const Explorer = lazy(() => import('/src/explorer'));
const Trash = lazy(() => import('/src/trash'));
import Minimize from '/src/minimzeicon';
import fullTrash from '/src/assets/img/icons8-full-bin-windows-48.png';

function Loading() {
    return (
        <div className='w-full h-full flex justify-center items-center bg-neutral-900'> 
            <div className="animate-spin rounded-full border-8 border-t-transparent border-gray-200 h-16 w-16"/>
        </div>
    );
}
export default function AppWindow({ app, container, handleCloseApp,setShowModal,trashApps,isActive,setIsActive,DeletedApps  }) {

    const [size,setSize] = useState(() => {
        if(app.name === 'About me' || app.name === 'Projects'){
        return 'w-screen h-screen';}
        else{
        return 'w-4/6 h-4/6';
        }});
    const [initialPostion] = useState(()=>{
        const random = Math.floor(Math.random() * 51) +50;
        return { x: random, y: random };
    })
    const [position,setPosition] = useState(()=>{
        if(app.name === 'About me' || app.name === 'Projects'){
            return {x:0 , y:0};
        }else{
            return initialPostion;}
    });
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
    const isActiveApp = isActive === app.name;
    return (
        <motion.div
            drag
            dragListener={false}
            onDrag={checkPostion}
            onDragEnd={handleDargEnd}
            dragControls={dragControl}
            dragMomentum={false}
            dragConstraints={container} 
            className={`draggable absolute top-0 left-0 flex flex-col ${size} ${isActiveApp?'z-30':'z-20'} border border-white/20` } 
            dragElastic={1}
            animate={{x:position.x, y:position.y,transition:{type:"tween",duration:0.2}}}
            onMouseDown={()=>setIsActive(app.name)}
        >
            <div onPointerDown={handleDrag} className='bg-black h-8 flex justify-between items-center'>
                <img src={app.name === 'Trash'?DeletedApps.length > 0?fullTrash:app.icon :app.icon} alt='app icon' className='h-full p-1'/>
                <div className='h-full flex'>
                    <Minimize size={size} handleWindow={handleWindow}/>
                    <img onClick={()=>handleCloseApp(app.name)} src={exit} alt="exit icon" className='h-full p-1  hover:bg-red-400 cursor-default' />
                </div>
            </div>
            <div className='flex-1 w-full overflow-auto'>
                <Suspense fallback={<Loading />}>
                    {app.name === 'About me' && <AboutMe size={size} />}
                    {app.name === 'Projects' && <Projects size={size} />}
                    {app.name === 'Explorer' && <Explorer />}
                    {app.name === 'Trash'&& <Trash trashApps={trashApps} />}
                </Suspense>
            </div>
        </motion.div>
    )
}
