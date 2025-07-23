import Map from "./map";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
function ShowCase(){
    gsap.registerPlugin(ScrollTrigger,ScrambleTextPlugin);
    const showCase = useRef(null)
    useGSAP(()=>{
        document.fonts.ready.then(()=>{
            const title = new SplitText('.title2',{type:'chars'});
            gsap.from(title.chars, {stagger:0.2,autoAlpha:0,scrambleText: {
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},scrollTrigger: {
    trigger: ".title2",
    toggleActions: "restart pause restart pause"
    }
    });
    })
    },{scope:showCase})
    return(
        <section ref={showCase} id="showcase" className="scroll-m-12 bg-black flex flex-col justify-center sm:justify-baseline sm:gap-5 items-center  min-h-[650px]">
            <h2 className="title2 text-amber-400 text-center font-rosnoc lg:text-6xl sm:text-3xl text-xl">SHOWCASE</h2>
            <div className="w-full flex flex-col justify-center items-center gap-2.5" >
                <div   className='container min-h-3/4 w-full flex flex-col self-baseline'>
                    <Map />        
                </div>
            </div>
            <div className="bg-black lg:h-32 sm:h-14 h-5 w-full"/>
        </section>
    )
}
export default ShowCase;