import { AnimatePresence, motion } from "motion/react";

export default function Rightclicked({rightclicked, app, setDeletedApps}) {
  return(
    <AnimatePresence>
      {
        rightclicked === app && 
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="absolute top-3 -right-40 bg-black/80 backdrop-blur-2xl border border-gray-800 w-40 h-fit flex flex-col items-start p-2 gap-2 text-white text-sm z-50"
          onClick={(e) => e.stopPropagation()} 
        >
          <button 
            onClick={() => {
              setDeletedApps(prev => [...prev, app]);
            }} 
            className="hover:bg-white/20 w-full p-1 text-left rounded-sm cursor-pointer"
          >
            Delete
          </button>
        </motion.div>
      }
    </AnimatePresence>
  )
}