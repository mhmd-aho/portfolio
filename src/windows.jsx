import user from '/src/assets/img/usericon.webp';
import power from '/src/assets/img/icons8-power-button-50.png';
import { motion,AnimatePresence } from "motion/react";
const variant = {
        hidden:{
            y:'100%',
            transition:{type:'tween',duration:0.4,ease:'easeOut'}
        },
        visible:{
            y:0,
            transition:{type:'tween',duration:0.4,ease:'easeOut'}
        }
}
export default function Windows(props){
    const appList = props.appList;
    const recommedApp = props.recommedApp;
    const handleOpenApp = props.handleOpenApp;
    return(
            <AnimatePresence>
                {
                    props.windowsOpen &&
                    <div className='h-[650px] w-2xl overflow-y-hidden absolute bottom-15 left-96 z-20'>
                        <motion.div variants={variant}  initial='hidden' animate='visible' exit='hidden' className='w-full h-full flex flex-col rounded-lg  overflow-hidden text-white'>
                          <div className='flex-1 w-full backdrop-blur-3xl bg-black/70 p-8'>
                          <div className='w-full flex justify-between items-center px-8'>
                            <p>Pinned</p>
                            <button className='bg-white/10 backdrop-blur-2xl px-3 py-1 rounded'>All apps</button>
                          </div>
                          <div className='flex justify-center items-center gap-4 flex-wrap '>
                            {
                                appList.map(app=>(
                                <div key={app.name}  onClick={()=>handleOpenApp(app)} className='flex flex-col items-center justify-center p-3 hover:backdrop-blur-2xl hover:bg-blue-300/20 col-start-1 row-start-5 ' >
                                    <img className='w-10' src={app.icon} alt="app icon" />
                                   <p className= 'text-white text-[10px]'>{app.name}</p>
                               </div>
                                ))
                            }

                          </div>
                          <div>
                            <div className='flex justify-between items-center px-8'>
                                <p>Recommended</p>
                                <button className='bg-white/10 backdrop-blur-2xl px-3 py-1 rounded'>More</button>
                            </div>
                            <div className='flex justify-baseline items-center flex-wrap w-full px-3'>
                                    {
                                        recommedApp.map(app=>(
                                            <div key={app.name}  onClick={()=>handleOpenApp(app)} className='flex items-center justify-baseline gap-2 w-1/2 h-16 p-3 hover:backdrop-blur-2xl hover:bg-blue-300/20'>
                                                <img src={app.icon} alt="app icon" />
                                                <div>
                                                    <p>{app.name}</p>
                                                    <p className='text-gray-300 text-sm'>{app.des}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                            </div>
                          </div>
                            </div>
                        <div className='h-16 w-full bg-black/80 backdrop-blur-3xl  px-14 flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='w-8 h-8 rounded-full p-1 bg-white'>
                                <img src={user} alt="user icon" />
                            </div>
                            <p className='text-sm'>Mohamad PC   </p>
                        </div>
                        <img onClick={props.handleShutDown} src={power} className='w-7 h-7' alt="power icon" />
                        </div>
                        </motion.div>
                    </div>
                }
            </AnimatePresence>

    )
}