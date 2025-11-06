import windows from '/src/assets/img/icons8-windows-480.png';
import { TailChase } from 'ldrs/react';
import 'ldrs/react/TailChase.css';
export default function WelcomeLoading(){
    return(
        <section className="w-screen h-screen bg-[#000000] flex flex-col justify-center items-center">
            <img src={windows} alt="windows icon" className='w-2xs' />
            <TailChase size="40" speed="1.75" color="white"/>
        </section>
    )
}