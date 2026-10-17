import shufflancise from '../assets/shufflancise.png';

export function Proyectos() {
    return(
        <section id='proyectos' className="md:scroll-mt-24 scroll-mt-36">
            <h3 className="text-3xl font-sora font-bold text-center">Proyectos</h3>

            <section className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 md:gap-2">
                <article className='mx-12 bg-[#141C4A] border-2 border-[#27346F] rounded-lg overflow-hidden md:mx-8'>
                    <a>
                        <img src={shufflancise} className='object-cover w-full rounded-lg' />
                    </a>
                    <div className='p-4'>
                        <p className='font-sora font-bold text-xl py-2'>ShufflanTrack</p>
                        <p className='text-[#A9B6E8]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem in neque.</p>
                    </div>
                </article>

                <article className='mx-12 bg-[#141C4A] border-2 border-[#27346F] rounded-lg overflow-hidden md:mx-8'>
                    <a>
                        <img src={shufflancise} className='object-cover w-full rounded-lg' />
                    </a>
                    <div className='p-4'>
                        <p className='font-sora font-bold text-xl py-2'>ShufflanTrack</p>
                        <p className='text-[#A9B6E8]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem in neque.</p>
                    </div>
                </article>
            </section>

        </section>
    );
}