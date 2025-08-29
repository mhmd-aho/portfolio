import html5 from '/src/about/Img/icons8-html5-30.png';
import css3 from '/src/about/Img/icons8-css3-30.png';
import js from '/src/about/Img/icons8-javascript-30.png';
import react from '/src/about/Img/icons8-react-native-50.png';
import tailwind from '/src/about/Img/icons8-tailwindcss-48.png';
import git from '/src/about/Img/icons8-git-50.png';
import github from '/src/about/Img/icons8-github-30.png';
import {useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrollTrigger,ScrambleTextPlugin);
function AboutMe(){
    const about = useRef(null)
    useGSAP(()=>{
    document.fonts.ready.then(()=>{
        const paragraph = new SplitText(".para",{
            type:'words',});
        const about = new SplitText(".title",{
            type:'chars'
        });
        const tools = new SplitText(".tools",{
            type:'chars'
        });
        gsap.from(about.chars, {autoAlpha:0,stagger:0.2,scrambleText: {
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},scrollTrigger: {
    trigger: ".title",
    toggleActions: "restart pause restart pause"
    }
    });
        gsap.from(paragraph.words,{autoAlpha:0,filter:`blur(5px)`,ease:'linear',scrollTrigger:{
            trigger:'.para',
            toggleActions:"restart pause restart pause"},stagger:{
                each:0.06,
                from:"random"
    }});
        gsap.from(tools.chars,{scrambleText: {
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",},stagger:0.2,scrollTrigger:{
                    trigger:".tools",
                    toggleActions:"restart pause restart pause"
        }});
    })
    gsap.from('.logos',{autoAlpha:0,yPercent:'random([-100,100])',stagger:{
        each:0.2,
        from:"random"
    },scrollTrigger:{
        trigger:".logos",
        toggleActions:"restart pause restart pause"
    }})
    gsap.from('.names',{autoAlpha:0,yPercent:'random([-100,100])',stagger:{
        each:0.2,
        from:"random"
    },scrollTrigger:{
        trigger:".names",
        toggleActions:"restart pause restart pause"
    }})
    },{scope:about})
    return(
        <section ref={about} id="aboutMe" className="scroll-mt-12 h-screen bg-black flex flex-col sm:flex-row  justify-center items-center gap-2 sm:gap-40">
        <div className="sm:w-1/2 w-3/4 h-[70%] flex flex-col items-center justify-around ">
                <h2 className="title m-0 text-amber-400 lg:text-6xl sm:text-3xl text-xl font-rosnoc tracking-wider">ABOUT ME</h2>
                <p className="para font-nunito lg:text-xl w-full text-amber-50 text-center">I'm Mohamed, a self-taught developer based in Saida, Lebanon.I'm currently studying the Full-Stack Engineer path at Codecademy.I'm open to freelance opportunities and new projects.</p>
                <div className="lg:w-3/4 w-full h-1/3 flex flex-col sm:gap-3 justify-center gap-1">
                <h2 className="tools font-rosnoc text-amber-400 text-center sm:text-xl m-0">TOOLS</h2>
                <div className="flex justify-between items-center overflow-hidden">
                    <img  className="logos h-7 sm:h-10 sm:w-10 w-7" loading="lazy" src={html5} />
                    <img  className="logos h-7 sm:h-10 sm:w-10 w-7" loading="lazy" src={css3} />
                    <img  className="logos h-7 sm:h-10 sm:w-10 w-7" loading="lazy" src={js}/>
                    <img  className="logos h-7 sm:h-10 sm:w-10 w-7" loading="lazy" src={react}/>
                    <img  className="logos h-7 sm:h-10 sm:w-10 w-7" loading="lazy" src={tailwind}/>
                    <img  className="logos h-7 sm:h-10 sm:w-10 w-7" loading="lazy" src={git} />
                    <img  className="logos h-7 sm:h-10 sm:w-10 w-7" loading="lazy" src={github}/>
                </div>
                <div className="flex justify-between items-center text-[7px] sm:text-[0.6em] text-amber-50">
                    <p className="names sm:w-10 w-7 m-0  text-center">HTML5</p>
                    <p className="names w-7 sm:w-10 m-0 text-center">CSS3</p>
                    <p className="names w-7 sm:w-10 m-0 text-center">JS</p>
                    <p className="names w-7 sm:w-10 m-0 text-center">REACT</p>
                    <p className="names w-7 sm:w-10 m-0 text-center">TAILWIND</p>
                    <p className="names w-7 sm:w-10 m-0 text-center">GIT</p>
                    <p className="names w-7 sm:w-10 m-0 text-center">GITHUB</p>
                </div>
                </div>
        </div>
    </section>
    )
}
export default AboutMe;