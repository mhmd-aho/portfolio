import { useMemo} from "react";
import { desktopFolder,downloadApp,documents } from "/src/data";
export default function DesktopFolder({folder}){

    const opendedFolder = useMemo(() =>{
        if(folder === 'desktopApp'){
            return desktopFolder;
        } else if(folder === 'downloadApp'){
            return downloadApp;
        } else if(folder === 'documents'){
            return documents;
        }
    },[folder]);
    return(
                        <div className="w-full flex-1 flex flex-col gap-3 px-10 font-light text-sm bg-neutral-900">
                                <div className="w-fit flex justify-baseline items-baseline">
                                    <p className="w-72 border-r border-white/50">name</p>
                                    <p className="w-48 border-r border-white/50 text-start px-2">Date modified</p>
                                    <p className='w-36 border-r border-white/50 text-start px-2'>Type</p>
                                    <p className='w-20 border-r border-white/50 text-start px-2'>Size</p>
                                </div>                          
                           { 
                            opendedFolder.length === 0 ? 
                            <p className='text-white/50 self-center'>This folder is empty</p> :
                           (opendedFolder.map((file)=>(
                                    <div key={file.name} className="w-fit flex justify-baseline items-baseline hover:bg-gray-400/30">
                                            <div className="w-72 flex justify-baseline items-center gap-2 px-2">
                                                <img loading="lazy" alt={file.icon} src={file.icon} className="w-4"/>  
                                                <p>{file.name}</p>
                                            </div>
                                            <p className="w-48 px-2">{file.date}</p>
                                            <p className="w-36 px-2">{file.type}</p>
                                            <p className="w-20 px-2">{file.size}</p>
                                    </div>
                                )))
                             }
                        </div>
    )
}