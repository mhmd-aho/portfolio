import Contacts from './Contact';
function Header(){
    return(
    <header  className="fixed top-0 left-0 sm:px-2 px-1 flex gap-14 sm:justify-between items-center w-full h-12 bg-black z-1">
        <h4  className="text-[9px] sm:text-xl/5  font-nunito cursor-default font-extrabold m-0 text-amber-400">MOHAMED <br/> ABOU HAMOUD</h4>
        <nav className="w-3/5 sm:w-1/3 flex items-center justify-between text-[7px] lg:text-base  text-amber-50 font-nunito">
            <Contacts />
            <a className="duration-300 hover:text-amber-400 hover:tracking-widest" href="#home">HOME</a>
            <a className="duration-300 hover:text-amber-400 hover:tracking-widest" href="#aboutMe">ABOUT</a>
            <a className="duration-300 hover:text-amber-400 hover:tracking-widest" href="#showcase">SHOWCASE</a>
        </nav>
    </header>
)}
export default Header;