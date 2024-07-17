import { useEffect } from 'react';
import Image from 'next/image';

export const Actors: React.FC = (): JSX.Element => {
  let images: HTMLElement[] = [];

  useEffect(() => {
    images = Array.from(document.querySelectorAll('.img'));
    images.forEach((image, idx) => {
      if (image instanceof HTMLElement) {
        image.style.backgroundImage = `url(./Parallax/p${idx + 1}.jpg)`;
      }
    });

  }, []);

  return (
    <section id='actors' data-scroll-section className='relative h-screen w-screen'>
      {/* Main container with background image */}
      <div className="absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-start bg-slate-300">
        <div className="h-[75%] w-[100%] flex justify-start ">
          {/* Each image container now includes hover effects and a click prompt */}
          <div className="relative w-[400px] h-[150%] overflow-hidden group">
            <div data-scroll data-scroll-speed='2' className="img absolute left-[-240px] w-[600px] h-[100%] bg-cover bg-center hover:border-[2px] hover:border-black drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)] group-hover:blur-[2px]"></div>
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 group-hover:opacity-100 hover:drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
              <span data-scroll data-scroll-speed='-5' className="text-white text-4xl drop-shadow-[0_1.5px_5px_rgba(0,0,0,5)] rounded-2xl border-white border-[1px] p-3 shadow-sm shadow-black/40 hover:backdrop-blur-2xl duration-100 hover:duration-100 hover:bg-black/20">Jeffry -&gt; </span>
            </div>
          </div>
  
          <div className="relative w-[400px] h-[150%] overflow-hidden group">
            <div data-scroll data-scroll-speed='-1' className="img absolute left-[-170px] w-[600px] h-[100%] bg-cover bg-center border-t-[1px] border-black/30 drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)] group-hover:blur-sm"></div>
            <div className="absolute cursor-pointer inset-0 flex items-center hover:border-[1px] hover:border-black/60 justify-center opacity-0 group-hover:opacity-100">
              <span data-scroll data-scroll-speed='-8' className="text-white text-4xl drop-shadow-[0_1.5px_5px_rgba(0,0,0,5)] rounded-2xl border-white border-[1px] p-3 shadow-sm shadow-black/40 hover:backdrop-blur-2xl duration-100 hover:duration-100 hover:bg-black/20">Alexa -&gt;</span>
            </div>
          </div>
  
          <div className="relative w-[400px] h-[150%] overflow-hidden group">
            <div data-scroll data-scroll-speed='2' className="img absolute left-[-30px] w-[300px] h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)] group-hover:blur-sm"></div>
            <div className="absolute cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span data-scroll data-scroll-speed='-5' className="text-white text-4xl drop-shadow-[0_1.5px_5px_rgba(0,0,0,5)] rounded-2xl border-white border-[1px] p-3 shadow-sm shadow-black/40 hover:backdrop-blur-2xl duration-100 hover:duration-100 hover:bg-black/20">Zorro Gris -&gt;</span>
            </div>
          </div>
  
          <div className="relative w-[400px] h-[150%] overflow-hidden group">
            <div data-scroll data-scroll-speed='-1' className="img absolute left-[-200px] w-[600px] h-[100%] bg-cover bg-center drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)] group-hover:blur-sm"></div>
            <div className="absolute cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-[1px] hover:border-black/60">
              <span data-scroll data-scroll-speed='-8' className="text-white text-4xl drop-shadow-[0_1.5px_5px_rgba(0,0,0,5)] rounded-2xl border-white border-[1px] p-3 shadow-sm shadow-black/40 hover:backdrop-blur-2xl duration-100 hover:duration-100 hover:bg-black/20">Diego -&gt;</span>
            </div>
          </div>
  
          <div className="relative w-[400px] h-[150%] overflow-hidden group">
            <div data-scroll data-scroll-speed='2' className="img absolute left-[-150px] w-[600px] h-[100%] bg-cover bg-center border-t-[1px] border-black/30 drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)] group-hover:blur-sm"></div>
            <div className="absolute cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span data-scroll data-scroll-speed='-5' className="text-white text-4xl drop-shadow-[0_1.5px_5px_rgba(0,0,0,5)] rounded-2xl border-white border-[1px] p-3 shadow-sm shadow-black/40 hover:backdrop-blur-2xl duration-100 hover:duration-100 hover:bg-black/20">Saralí -&gt;</span>
            </div>
          </div>
  
          <div className="relative w-[400px] h-[150%] overflow-hidden group">
            <div data-scroll data-scroll-speed='-1' className="img absolute left-[-155px] w-[600px] h-[100%] bg-cover bg-center border-t-[1px] border-black/30 drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)] group-hover:blur-sm"></div>
            <div className="absolute cursor-pointer inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-[1px] hover:border-black/60">
              <span data-scroll data-scroll-speed='-8' className="text-white text-4xl drop-shadow-[0_1.5px_5px_rgba(0,0,0,5)] rounded-2xl border-white border-[1px] p-3 shadow-sm shadow-black/40 hover:backdrop-blur-2xl duration-100 hover:duration-100 hover:bg-black/20">Claudia -&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  export default Actors;