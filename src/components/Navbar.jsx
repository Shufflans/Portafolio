import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="px-6 md:px-10 flex justify-between items-center border-b md:border-[#27346F] fixed top-0 w-full z-200 bg-[#0B1230]">
            <h1 onClick={() => window.location.reload()} class="text-xl font-bold font-sora items-center justify-cente cursor-pointer pl-2 py-10 md:py-5">Mi Portafolio</h1>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl pr-1 pb-1">{isOpen ? <IoClose /> : <TiThMenuOutline/>}</button>
            <nav className={`${isOpen ? 'opacity-100 translate-y-0 visible' : ' opacity-0 -translate-y-4 invisible'} bg-[#1e2b4e] transition-all ease-in-out p-2 gap-10 flex flex-col absolute top-full left-0 w-full items-center border-t border-b border-[#344c88] md:p-1 md:flex md:flex-row md:static md:w-auto md:gap-6 md:opacity-100 md:visible md:translate-y-0 md:bg-transparent md:border-b md:border-t md:border-transparent`}>
                <a href="#proyectos" onClick={() => setIsOpen(false)} class="p-2 text-[#A9B6E8] hover:text-[#F0457F] transition pt-6 md:pt-2 w-full text-center">Proyectos</a>
                <a href="#sobre-mi" onClick={() => setIsOpen(false)} class="p-2 text-[#A9B6E8] hover:text-[#F0457F] transition w-full text-center whitespace-nowrap">Sobre mí</a>
                <a href="#noticias" onClick={() => setIsOpen(false)} class="p-2 text-[#A9B6E8] hover:text-[#F0457F] transition w-full text-center ">Noticias</a>
                <a href="#contacto" onClick={() => setIsOpen(false)} class="p-2 text-[#A9B6E8] hover:text-[#F0457F] transition pb-6 md:pb-2 w-full text-center">Contacto</a>
            </nav>
        </header>
    );
}