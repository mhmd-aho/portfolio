export default function Trash({trashApps}){
    return(
        <div className="w-full h-full flex flex-col justify-baseline gap-2 text-white bg-neutral-900">
            <div className="w-fit flex justify-baseline items-baseline">
                <p className="w-96 border-r border-white/50">name</p>
                <p className="w-64 border-r border-white/50 text-start px-2">Date modified</p>
                <p className='w-48 border-r border-white/50 text-start px-2'>Type</p>
                <p className='w-36 border-r border-white/50 text-start px-2'>Size</p>
            </div>
            {
                trashApps.length > 0 ? 
                trashApps.map((app,index)=>(
                        <div key={index} className="w-fit flex justify-baseline items-baseline hover:bg-gray-400/30">
                            <div className="w-96 flex justify-baseline items-center gap-2 px-2">
                                <img alt={app.name} src={app.icon} className="w-4"/>  
                                <p>{app.name}</p>
                            </div>
                            <p className="w-64 px-2">{app.date}</p>
                            <p className="w-48 px-2">{app.type}</p>
                            <p className="w-36 px-2">{app.size}</p>
                        </div>
                )) : <p className="text-center mt-10 text-white/50">Trash is empty</p>
            }      
        </div>
    )
}