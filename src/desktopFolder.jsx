import { desktopApp } from "/src/data";

export default function DesktopFolder(){
    return(
                        <div className="w-full h-screen flex flex-col gap-3 px-10 font-light text-sm">
                                <div className="w-fit flex justify-baseline items-baseline">
                                    <p className="w-72 border-r border-white/50">name</p>
                                    <p className="w-48 border-r border-white/50 text-start px-2">Date modified</p>
                                    <p className='w-36 border-r border-white/50 text-start px-2'>Type</p>
                                    <p className='w-20 border-r border-white/50 text-start px-2'>Size</p>
                                </div>                        
                           { desktopApp.map((file,index)=>(
                                    <div key={index} className="w-fit flex justify-baseline items-baseline hover:bg-gray-400/30">
                                            <div className="w-72 flex justify-baseline items-center gap-2 px-2">
                                                <img src={file.icon} className="w-4"/>  
                                                <p>{file.name}</p>
                                            </div>
                                            <p className="w-48 px-2">11/8/2025</p>
                                            <p className="w-36 px-2">/src/img</p>
                                            <p className="w-20 px-2">4kb</p>
                                    </div>
                        ))}
                        </div>
    )
}