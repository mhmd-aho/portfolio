
export default function Explorer(){
    return(
        <section  className="w-full h-fit bg-neutral-900 text-white p-4">
            <div className="h-96 flex flex-col justify-baseline items-baseline gap-4">
                <h2 className="text-2xl font-bold">Quick access</h2>
                <div className="w-3/4 self-center flex-1 flex justify-baseline items-baseline gap-11 flex-wrap px-10">
                    <div className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                        <div className="bg-amber-50 w-12 h-12"/>
                        <div>
                            <p className="text-sm">Desktop</p> 
                            <p className="text-gray-400 text-sm">Stored locally</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                        <div className="bg-amber-50 w-12 h-12"/>
                        <div>
                            <p className="text-sm">Pictures</p> 
                            <p className="text-gray-400 text-sm">Stored locally</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                        <div className="bg-amber-50 w-12 h-12"/>
                        <div>
                            <p className="text-sm">Documents</p> 
                            <p className="text-gray-400 text-sm">Stored locally</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-80 h-20 rounded-lg hover:bg-neutral-700">
                        <div className="bg-amber-50 w-12 h-12"/>
                        <div>
                            <p className="text-sm">img</p> 
                            <p className="text-gray-400 text-sm">/src/assets</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-baseline items-baseline gap-4">
                <h2>Recent</h2>
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
        </section>
    )
}