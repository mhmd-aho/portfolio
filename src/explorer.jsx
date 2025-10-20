import { useState } from 'react';
import desktopFolder from '/src/assets/img/icons8-desktop-folder-48.png';
import documentsFolder from '/src/assets/img/icons8-documents-folder-48.png';
import downloadsFolder from '/src/assets/img/icons8-downloads-folder-48.png';
import picturesFolder from '/src/assets/img/icons8-pictures-folder-48.png';
import Pictures from '/src/imgFolder';
export default function Explorer(){
    const [folder,setFolder] = useState(null);
    return(
        <section  className="w-full h-fit bg-neutral-900 text-white p-4">
            <div className='flex justify-baseline items-baseline'>
                <button onClick={()=>setFolder(null)}>back</button>
            </div>
            {folder === 'imageArray' && <Pictures/>}
            {folder === 'desktopApp' && <desktopFolder/>}
            {
                folder === null &&
                <>
                    <div className="h-96 flex flex-col justify-baseline items-baseline gap-4">
                    <h2 className="text-2xl font-bold">Quick access</h2>
                    <div className="w-3/4 self-center flex-1 flex justify-between items-baseline flex-wrap px-10">
                        <button onClick={()=>setFolder('desktopApp')} className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                            <img src={desktopFolder} className=" w-12 h-12"/>
                            <div className='text-start'>
                                <p className="text-sm">Desktop</p> 
                                <p className="text-gray-400 text-sm">Stored locally</p>
                            </div>
                        </button>
                        <button onClick={()=>setFolder('imageArray')} className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                            <img src={picturesFolder} className="w-12 h-12"/>
                            <div className='text-start'>
                                <p className="text-sm">Pictures</p> 
                                <p className="text-gray-400 text-sm">Stored locally</p>
                            </div>
                        </button>
                        <button className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                            <img src={documentsFolder} className="w-12 h-12"/>
                            <div className='text-start'>
                                <p className="text-sm">Documents</p> 
                                <p className="text-gray-400 text-sm">Stored locally</p>
                            </div>
                        </button>
                        <button className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                            <img src={downloadsFolder} className=" w-12 h-12"/>
                            <div className='text-start'>
                                <p className="text-sm">Downloads</p> 
                                <p className="text-gray-400 text-sm">Stored locally</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-baseline items-baseline gap-4">
                    <h2 className="text-2xl font-bold">Recent</h2>
                    <div className="w-full flex flex-col gap-3 px-10">
                        <div className="w-full flex justify-between items-baseline">
                            <p className="w-20">name</p>
                            <p className="w-30 text-center">Data accessed</p>
                            <p>File location</p>
                        </div>
                        <div className="w-full flex justify-between items-baseline">
                            <div className="flex justify-baseline items-center gap-2">
                            <div className="h-8 w-8 bg-amber-50"/>  
                            <p>name</p>
                            </div>
                            <p className="w-30 text-center">11/8/2025</p>
                            <p className="w-20 text-center">/src/img</p>
                        </div>
                        <div className="w-full flex justify-between items-baseline">
                            <div className="flex justify-baseline items-center gap-2">
                            <div className="h-8 w-8 bg-amber-50"/>  
                            <p>name</p>
                            </div>
                            <p className="w-30 text-center">11/8/2025</p>
                            <p className="w-20 text-center">/src/img</p>
                        </div>
                        <div className="w-full flex justify-between items-baseline">
                            <div className="flex justify-baseline items-center gap-2">
                            <div className="h-8 w-8 bg-amber-50"/>  
                            <p>name</p>
                            </div>
                            <p className="w-30 text-center">11/8/2025</p>
                            <p className="w-20 text-center">/src/img</p>
                        </div>
                        <div className="w-full flex justify-between items-baseline">
                            <div className="flex justify-baseline items-center gap-2">
                            <div className="h-8 w-8 bg-amber-50"/>  
                            <p>name</p>
                            </div>
                            <p className="w-30 text-center">11/8/2025</p>
                            <p className="w-20 text-center">/src/img</p>
                        </div>
                        <div className="w-full flex justify-between items-baseline">
                            <div className="flex justify-baseline items-center gap-2">
                            <div className="h-8 w-8 bg-amber-50"/>  
                            <p>name</p>
                            </div>
                            <p className="w-30 text-center">11/8/2025</p>
                            <p className="w-20 text-center">/src/img</p>
                        </div>
                        <div className="w-full flex justify-between items-baseline">
                            <div className="flex justify-baseline items-center gap-2">
                            <div className="h-8 w-8 bg-amber-50"/>  
                            <p>name</p>
                            </div>
                            <p className="w-30 text-center">11/8/2025</p>
                            <p className="w-20 text-center">/src/img</p>
                        </div>
                    </div>
                </div>
                </>
            }
        </section>
    )
}