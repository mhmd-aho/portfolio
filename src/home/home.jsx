import homeBG from '/src/home/img/homeBG.png';
import eyeSide from '/src/home/img/eyeSide.png';
import rightSide from '/src/home/img/rightSide.png'
import { useGSAP } from '@gsap/react';
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
function Home(){
    useEffect(() => {
        [homeBG, eyeSide, rightSide].forEach((src) => {
            const img = new Image();
            img.src = src;
        });
}, []);
    gsap.registerPlugin(ScrambleTextPlugin);
    const home = useRef()
    useGSAP(()=>{
        document.fonts.ready.then(()=>{
            const leftWord = new SplitText('.leftWord',{
                type:'chars',
            });
            const rightWord = new SplitText('.rightWord',{
                type:'chars',
            });
            gsap.fromTo('.eye',{scale:2,opacity:0},{scale:1,opacity:1,duration:1})
            gsap.fromTo('.right',{scale:0,opacity:0},{scale:1,opacity:1,duration:1})
            gsap.fromTo('.leftWord',{x:-700},{x:0,delay:1,duration:1})
            gsap.fromTo('.rightWord',{x:700},{x:0,delay:1,duration:1})
            gsap.from(leftWord.chars,{delay:2,alpha:0,scrambleText: {
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",}, stagger:0.2})
            gsap.from(rightWord.chars,{delay:4,alpha:0,scrambleText: {
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",}, stagger:0.2})
        })
    },{scope:home})
    return(
        <section ref={home} id='home' style={{backgroundImage:`url(${homeBG})`}} className='sm:p-4 scroll-m-12 scrollbar-hide overflow-hidden h-screen grid grid-cols-4 grid-rows-6 sm:gap-x-4 bg-center bg-cover'>
            <div className='eye col-start-1 row-start-2 bg-cover invisible lg:visible'   style={{backgroundImage:`url(${eyeSide})`}} />
            <div className='right col-start-4 row-start-5 bg-cover invisible lg:visible'   style={{backgroundImage:`url(${rightSide})`}} />
            <h1 className="leftWord col-span-2  row-start-3 h-3/5 sm:h-full bg-black pt-4 sm:pt-8 xl:pt-6 font-rosnoc text-amber-50 text-xl sm:text-4xl lg:text-5xl xl:text-7xl tracking-widest text-end sm:text-center overflow-hidden" >FRONT-END</h1>
            <h1 className="rightWord col-start-3 col-end-5 row-start-3 h-3/5 sm:h-full sm:row-start-4 bg-black pt-8 xl:pt-6 font-rosnoc text-amber-50 text-xl sm:text-4xl lg:text-5xl xl:text-7xl tracking-widest text-start sm:text-center overflow-hidden" >DEVELOPER</h1>
        </section>
    )
}
export default Home;