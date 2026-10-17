import fotoPerfil from '../assets/foto_de_perfil.jpg';
import portada from '../assets/portada.jpg';
import { useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function SobreMi() {
    const [estaTocado, setEstaTocado] = useState(false);

    const manejarTocada = () => {

        const pantallaCelular = window.matchMedia('(hover: none)').matches;

        if (pantallaCelular) {
            setEstaTocado(!estaTocado);s
        }
    };
    return(
        <section onClick={manejarTocada} id='sobre-mi' className="scroll-mt-40 md:scroll-mt-30 mt-40 flex flex-col items-center justify-center md:flex-row-reverse md:gap-16 md:px-8 md:mt-30">
            <div className="relative group border-4 border-[#27346F] rounded-full size-60 overflow-hidden md:size-96 md:shrink-0 ">
                <img src={fotoPerfil} className={`object-cover size-full transition-all duration-500 ease-in-out ${ estaTocado ? 'opacity-0 scale-105' : 'opacity-100 scale-100'} group-hover:opacity-0 group-hover:scale-105`}/>
                <img src={portada} className={`object-cover size-full absolute inset-0 transition-all duration-500 ease-in-out ${ estaTocado ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} group-hover:opacity-100 group-hover:scale-105`}/>
            </div>

            <div className='flex flex-col items-center md:items-start'>
                <div className='mt-12 md:mt-8'>
                    <h1 className='font-sora text-center text-3xl font-bold md:text-start md:text-5xl'>
                        <span className='md:block'>Camilo </span>
                        <span>Covarrubias</span>
                        </h1>
                    <p className='text-center pt-4 text-2xl text-[#F0457F] md:text-start md:pt-6'>Ingeniero en Informática</p>
                    <p className='text-[#A9B6E8] text-center pt-4 md:text-start md:pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non consequatur inventore, libero natus aliquid temporibus laudantium qui.</p>
                </div>

                <div className='mt-15 flex flex-wrap gap-13 justify-center items-center md:pt-2'>
                    <a href="https://www.facebook.com/bronce.Lol" target="_blank" className='text-3xl text-[#1877F2] size-14 border-2 rounded-full flex justify-center items-center md:size-10 md:text-2xl'>
                        <FaFacebookSquare/>
                    </a>
                    <a href="https://www.instagram.com/shuffladas?obrf=enpoMzZucXuajhs" target="_blank" className='text-3xl text-[#C13584] size-14 border-2 rounded-full flex justify-center items-center md:size-10 md:text-2xl'>
                        <FaInstagram className='translate-y-px'/>
                    </a>
                    <a href="https://www.linkedin.com/in/camilo-alfonso-covarrubias-armijo-9a9832414" target="_blank" className='text-3xl text-[#0e76a8] size-14 border-2 rounded-full flex justify-center items-center md:size-10 md:text-2xl'>
                        <FaLinkedin/>
                    </a>
                    <a href="https://github.com/Shufflans" target="_blank" className='text-3xl text-[#EAF0FF] size-14 border-2 rounded-full flex justify-center items-center md:size-10 md:text-2xl'>
                        <FaGithub/>
                    </a>
                </div>
            </div>
        </section>
    );
}