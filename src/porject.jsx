import { useState } from "react";
import { projects } from "/src/data.js";
import { motion} from "motion/react";
import Cursor from "/src/cursor";
import noise from '/src/assets/img/noise.png';
const projectVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};
const buttonVariants = {
    invisible:{scale:0},
    visible:{scale:1, transition: { duration: 0.3 }},
    hover: { 
        scale: 1.1,
        backgroundColor: "#EAD653",
        color: "#1A1D1B",
        transition: { duration: 0.3 } },
    tap: { scale: 0.9, transition: { duration: 0.1 } }
};
export default function Projects(){
    const [isHovered, setIsHovered] = useState(false);
    const [hover,setHover] =useState(false)
    return(
        <section style={{backgroundImage:`url(${noise})`}}  className="w-full h-fit bg-black flex flex-col justify-start items-center gap-52 p-20  cursor-[url(/src/assets/img/dot.png),_pointer]">
                {
                    projects.map((project , index)=>{
                        return(
                            <motion.div  key={project.name} whileHover={{scale:1.1}} onMouseEnter={()=>setIsHovered(index)} onMouseLeave={()=>setIsHovered(null)} className="h-fit flex odd:self-start even:self-end odd:flex-row even:flex-row-reverse items-start gap-1 overflow-hidden font-normal">
                                        <motion.div  initial='hidden' variants={projectVariants} whileInView='visible' viewport={{once:true,amount:0.2}} className="w-fit flex flex-col items-start gap-1">
                                            <img onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="h-56" src={project.src} alt="project image" />
                                            <div className={`flex flex-col  ${index % 2 === 0?'items-start self-start':'items-end self-end'} gap-0.5`}>
                                                <p onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="text-sm text-primary">{project.name}</p>
                                                <p onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="text-[10px] text-white">{project.tools}</p>
                                            </div>
                                        </motion.div>
                                        <motion.div initial='hidden' variants={projectVariants} whileInView='visible' viewport={{once:true,amount:0.2}} className="flex flex-col items-start gap-10  w-3xs ">
                                            <p onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}  className={`text-sm  text-white/50 w-3xs ${index % 2 === 0?'text-start':'text-end'} `}>{project.des}</p>
                                                    <motion.div animate={isHovered === index?{opacity:1,transition:{duration:0.3,ease:'easeInOut'}}:{opacity:0}} className='flex gap-5 self-center'>
                                                        <motion.a 
                                                        onMouseEnter={()=>setHover(true)} 
                                                        onMouseLeave={()=>setHover(false)} 
                                                        variants={buttonVariants} whileHover='hover' 
                                                        whileTap='tap' animate='visible' initial='invisible' 
                                                        href={project.repo} className="border border-primary px-2 py-1 text-sm text-white rounded-lg">Repository</motion.a>
                                                        <motion.a 
                                                        onMouseEnter={()=>setHover(true)} 
                                                        onMouseLeave={()=>setHover(false)} 
                                                        variants={buttonVariants} whileHover='hover' 
                                                        whileTap='tap' animate='visible' initial='invisible' href={project.link} className="border border-primary px-2 py-1 text-sm text-white rounded-lg">Live demo</motion.a>
                                                    </motion.div>
                                        </motion.div>
                                    </motion.div>
                                    
                                )
                                
                            })
                        }
                        <Cursor hover={hover}/>
        </section>
    )
}