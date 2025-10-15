import { AnimatePresence,motion, scale } from "motion/react";
const modalVariants = {
    hidden: { opacity: 0,scale:0.2 },
    visible: { 
        opacity: 1,
        scale:1,
        transition: { duration: 0.3 }  
    },
};
export default function Modal({showModal}) {
    return(
        <AnimatePresence>
            {
                showModal &&  
                        <motion.div 
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="w-screen h-screen bg-white/30 backdrop-blur-2xl fixed top-0 left-0"
                        />
            }

        </AnimatePresence>
    )
}