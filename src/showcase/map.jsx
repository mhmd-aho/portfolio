import project1 from '/src/showcase/img/randomMessages.png';
import project2 from '/src/showcase/img/salaryCal.png';
import project3 from '/src/showcase/img/randomMovie.png';
import project4 from '/src/showcase/img/taskManager.png';
import project5 from '/src/showcase/img/healthDashboard.png';
import project6 from '/src/showcase/img/walletTrack.png';
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
export default function Map() {
        useEffect(() => {
            [project1, project2,project3,project4, project5,project6].forEach((src) => {
                const img = new Image();
                img.src = src;
            });
    }, []);
    const divs= useRef([])
    const [hoverIndex,setHoverIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false); 
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    const popupRef = useRef();
    useGSAP(() => {
        if (popupRef.current) {
            gsap.set(popupRef.current, { autoAlpha: 0, scale: 0.8 });
            if (hoverIndex !== null && projects[hoverIndex].src) {
                gsap.to(popupRef.current, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out',});
            } else {
                gsap.to(popupRef.current, {
                    autoAlpha: 0,
                    scale: 0.8,
                    duration: 0.3,
                    ease: 'power2.in',});
            }
        }
    },{ dependencies: [hoverIndex] });
const projects = [
        {
            name: "RANDOM MESSAGE",
            src: project1,
            des: 'Html5 || Css3 || Javascript',
            link:'https://mhmd-aho.github.io/mixed-message/'
        },
        {
            name: "SALARY CALCULATOR",
            src: project2,
            des: 'Html5 || Css3 || Javascript',
            link:'https://mhmd-aho.github.io/salary-cal/'
        },
        {
            name: "RANDOM MOVIE",
            src: project3,
            des: 'Html5 || TailwindCss || React.js',
            link:'https://mhmd-aho.github.io/randomMovie/'
        },
        {
            name: "Task Manager",
            src: project4,
            des: 'Html5 || TailwindCss || React.js',
            link:'https://mhmd-aho.github.io/task-manager/'
        },
        {
            name: "health Dashboard",
            src: project5,
            des: 'Html5 || TailwindCss || React.js',
            link:'https://mhmd-aho.github.io/healthDashboard/'
        },
        {
            name: "Wallet Track",
            src: project6,
            des: 'Html5 || TailwindCss || React.js',
            link:'https://mhmd-aho.github.io/wallet-track/'
        },
    ];
    return (
        <>
            {projects.map((project, index) => (
            <div ref={(el) => (divs.current[index] = el)} key={index} className='relative lg:h-30 h-20'>
                <div  className="flex items-center justify-between h-full hover:bg-amber-950/10 border-b-1 border-amber-50 xl:px-10 xl:w-3/4 w-5/6 px-2"
                onMouseEnter={() => !isMobile && setHoverIndex(index)} onMouseLeave={() => !isMobile && setHoverIndex(null)}
                onClick={() => isMobile && setHoverIndex(hoverIndex === index ? null : index)}>
                    <h3 className="titles font-rosnoc lg:text-4xl sm:text-lg text-sm w-2/5 sm:w-fit text-amber-50">{project.name}</h3>
                    <p className="font-nunito lg:text-xl sm:text-base text-[12px] text-amber-400">{project.des}</p>
                </div>
                { hoverIndex === index && (
                    <div ref={popupRef}  className='absolute top-9 right-0 z-50  xl:h-60 lg:h-40 sm:h-32 h-24 xl:w-90 lg:w-72 sm:w-50 w-40 rounded-2xl bg-cover bg-center flex justify-center items-center'  onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)} style={{backgroundImage:`url(${project.src})`}}>
                        <div className='w-full h-full bg-gray-950/40 rounded-2xl flex justify-center items-center '>
                        <a href={project.link} className='lg:px-7 sm:px-4 px-2 sm:py-1  lg:py-3 rounded-full border-amber-400 border-2 hover:bg-amber-400 hover:text-black hover:scale-75  hover:tracking-widest duration-500 ease-out lg:text-2xl sm:text-lg  font-nunito text-amber-400' >Visit</a>
                        </div>
                    </div>)}
            </div>
            ))}
        </>
);
}
