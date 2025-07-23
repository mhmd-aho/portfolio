import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import Contacts from './Contact';
function Header(){
    const textRef = useRef();
  const lettersRef = useRef([]);

    useEffect(() => {
        const split = new SplitText(textRef.current, { type: "chars" });
        lettersRef.current = split.chars;
        const handleMouseMove = (e) => {
        lettersRef.current.forEach((char) => {
            const rect = char.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            const dist = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);
            const force = Math.min(150 / dist, 15);
            gsap.to(char, {
            x: -Math.cos(angle) * force,
            y: -Math.sin(angle) * force,
            duration: 0.3,
            ease: "power3.out"
        });
    });
    };
        const reset = () => {
            gsap.to(lettersRef.current, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
    });
    };
    const target = textRef.current;
    target.addEventListener("mousemove", handleMouseMove);
    target.addEventListener("mouseleave", reset);

    return () => {
        target.removeEventListener("mousemove", handleMouseMove);
        target.removeEventListener("mouseleave", reset);
    };
}, []);

    return(
    <header  className="fixed top-0 left-0 sm:px-2 px-1 flex gap-14 sm:justify-between items-center w-full h-12 bg-black z-1">
        <h4 ref={textRef} className="text-[9px] sm:text-xl/5  font-nunito cursor-default font-extrabold m-0 text-amber-400">MOHAMED <br/> ABOU HAMOUD</h4>
        <nav className="w-3/5 sm:w-1/3 flex items-center justify-between text-[7px] lg:text-base  text-amber-50 font-nunito">
            <Contacts />
            <a className="duration-300 hover:text-amber-400 hover:tracking-widest" href="#home">HOME</a>
            <a className="duration-300 hover:text-amber-400 hover:tracking-widest" href="#aboutMe">ABOUT</a>
            <a className="duration-300 hover:text-amber-400 hover:tracking-widest" href="#showcase">SHOWCASE</a>
        </nav>
    </header>
)}
export default Header;