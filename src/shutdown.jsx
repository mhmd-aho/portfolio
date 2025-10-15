import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'
export default function ShutDown (){
    return(
        <section className="w-screen h-screen bg-black flex justify-center items-center ">
                <div className='flex flex-col items-center justify-center gap-3'>
                    <TailChase size="40" speed="1.75" color="white" />
                    <p className='text-3xl text-white'>Shutting down</p>
                </div>
        </section>
    )
}