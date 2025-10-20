export default function Minimize({size,handleWindow}){
    return(
        <div onClick={handleWindow} className="relative group h-8 w-8 hover:bg-gray-400">
            <div className={`absolute right-2 ${size === 'w-screen h-screen'?'w-3 h-3 top-2':'w-4 h-4  top-1.5 '} border-2 border-white/70 rounded-[2px]`}/>
            {
                size ==='w-screen h-screen' && <div className="absolute top-[10px] right-[11px] w-3 h-3  border-2 border-white/70 z-10 bg-black group-hover:bg-gray-400 rounded-[2px]  "/>
            }
        </div>
    )
}