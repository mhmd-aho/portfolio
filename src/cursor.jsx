import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";
export default function Cursor({hover}){
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX,{stiffness:400,damping:50});
    const smoothY = useSpring(mouseY,{stiffness:400,damping:50});
    useEffect(()=>{
        const move = e=>{
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        }
        window.addEventListener("mousemove",move);
        return () => window.removeEventListener("mousemove",move)
      },[mouseX, mouseY])
    return(
         <motion.div className={`fixed top-0 left-0 pointer-events-none bg-white mix-blend-difference h-20 w-20  rounded-full z-50`}
        animate={hover? {scale:1.5,transition:{ease:'easeOut'}}:{scale:1}}
         style={{
          x:smoothX,
          y:smoothY,
          translateX:"-50%",
          translateY:"-50%",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
        />
    )
}