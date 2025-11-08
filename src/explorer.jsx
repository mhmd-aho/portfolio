import { useState } from 'react';
import desktopFolder from '/src/assets/img/icons8-desktop-folder-48.png';
import documentsFolder from '/src/assets/img/icons8-documents-folder-48.png';
import downloadsFolder from '/src/assets/img/icons8-downloads-folder-48.png';
import picturesFolder from '/src/assets/img/icons8-pictures-folder-48.png';
import Pictures from '/src/imgFolder';
import DesktopFolder from '/src/desktopFolder';
import arrow from '/src/assets/img/icons8-arrow-30.png';
export default function Explorer(){
    const [folder,setFolder] = useState(null);
    return(
        <section  className="w-full h-full flex-col bg-neutral-900 text-white">
            <div className='flex justify-baseline items-baseline gap-1 px-4'>
                <button onClick={()=>setFolder(null)}><img loading='lazy' className={`w-4  ${folder?'opacity-100':'opacity-50'} rotate-180`} src={arrow}/></button>
                <button> <img loading='lazy' alt='arrow' className='w-4 opacity-50' src={arrow}/></button>
            </div>
            {folder === 'imageArray' && <Pictures/>}
            {(folder === 'desktopApp' || folder === 'downloadApp' || folder === 'documents' ) && <DesktopFolder folder={folder}/>}
            {
                folder === null &&
                <>
                    <div className="h-3/4 flex flex-col justify-baseline items-baseline gap-4">
                    <h2 className="text-2xl font-bold pl-4">Quick access</h2>
                    <div className="w-3/4 self-center flex-1 flex justify-between items-baseline flex-wrap px-10">
                        <button onClick={()=>setFolder('desktopApp')} className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                            <img loading='lazy' alt='desktop folder' src={desktopFolder} className=" w-12 h-12"/>
                            <div className='text-start'>
                                <p className="text-sm">Desktop</p> 
                                <p className="text-gray-400 text-sm">Stored locally</p>
                            </div>
                        </button>
                        <button onClick={()=>setFolder('imageArray')} className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                            <img loading='lazy' alt='pictures folder' src={picturesFolder} className="w-12 h-12"/>
                            <div className='text-start'>
                                <p className="text-sm">Pictures</p> 
                                <p className="text-gray-400 text-sm">Stored locally</p>
                            </div>
                        </button>
                        <button onClick={()=>setFolder('documents')} className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                            <img loading='lazy' alt='documents folder' src={documentsFolder} className="w-12 h-12"/>
                            <div className='text-start'>
                                <p className="text-sm">Documents</p> 
                                <p className="text-gray-400 text-sm">Stored locally</p>
                            </div>
                        </button>
                        <button onClick={()=>setFolder('downloadApp')} className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                            <img loading='lazy' alt='downloads folder' src={downloadsFolder} className=" w-12 h-12"/>
                            <div className='text-start'>
                                <p className="text-sm">Downloads</p> 
                                <p className="text-gray-400 text-sm">Stored locally</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="h-1/4 flex flex-col justify-baseline items-baseline gap-4 bg-neutral-900">
                    <h2 className="text-2xl font-bold pl-4">Recent</h2>
                    <div className="w-full flex flex-col gap-3 px-10">
                        <div className="w-full flex justify-between items-baseline">
                            <p className="w-20">name</p>
                            <p className="w-30 text-center">Data accessed</p>
                            <p>File location</p>
                        </div>
                        <p className='text-white/50 self-center'>this folder is empty</p>
                    </div>
                </div>
                </>
            }
        </section>
    )
}