import { useState } from "react";
import { useEffect } from 'react';
import gsap from 'gsap';
import arrow from '/src/home/img/arrow-up-svgrepo-com.svg'
export default function Contacts() {
    const [popup, setPopUp] = useState(false);
    function handleOnClick() {
        setPopUp(prev => !prev);
    }
        useEffect(() => {
        if (popup) {
            gsap.to('.arrow',{rotate:0})
            gsap.from(".list", {yPercent:-50,autoAlpha:0});
        }else{
            gsap.to('.arrow',{rotate:180});
        }
    }, [popup]);
    return (
        <div  className="relative text-amber-50 font-nunito  ">
            <a onClick={handleOnClick} className="flex items-center duration-300 hover:text-amber-400">CONTACTS<img className="arrow h-6 w-auto ml-1" src={arrow} /></a>
            {popup && (
                <div  className="list absolute w-full shadow-lg flex flex-col text-amber-400">
                    <a href="https://www.linkedin.com/in/mhmd-abou-hamoud" className="hover:text-amber-50 hover:tracking-widest duration-300">LINKEDIN</a>
                    <a href="https://github.com/mhmd-aho" className="hover:text-amber-50 hover:tracking-widest duration-300">GITHUB</a>
                    <a href="tel:+96171547591"  className="hover:text-amber-50 hover:tracking-widest duration-300">PHONE</a>
                    <a href="mailto:mhmdabouhamoud@gmail.com"  className="hover:text-amber-50 hover:tracking-widest duration-300">EMAIL</a>
                </div>
            )}
        </div>
    );
}
