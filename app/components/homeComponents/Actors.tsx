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
      <div className="absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-start">
          <div className="h-[75%] w-[100%] flex justify-start ">

            <div className="relative w-[400px] h-[150%] overflow-hidden">
              <div data-scroll data-scroll-speed='2' className="img absolute left-[-200px] w-[600px] h-[100%] bg-cover bg-center border-t-[1px] border-black/30"></div>
            </div>
            <div className="relative w-[400px] h-[150%] overflow-hidden">
              <div data-scroll data-scroll-speed='-1' className="img is-reveal absolute left-[-180px] w-[600px] h-[100%] bg-cover bg-center border-t-[1px] border-black/30"></div>
            </div>

            <div className="relative w-[400px] h-[150%] overflow-hidden">
              <div data-scroll data-scroll-speed='2' className="img is-reveal absolute left-[-12px] w-[300px] h-[100%] bg-cover bg-center"></div>
            </div>
            <div className=" relative w-[400px] h-[150%] overflow-hidden border-[1px] border-black/30">
              <div data-scroll data-scroll-speed='-1' className="img is-reveal absolute left-[-200px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>
            <div className=" relative w-[400px] h-[150%] overflow-hidden">
              <div data-scroll data-scroll-speed='2' className="is-reveal img absolute left-[-150px] w-[600px] h-[100%] bg-cover bg-center border-t-[1px] border-black/30"></div>
            </div>
            <div className=" relative w-[400px] h-[150%] overflow-hidden">
              <div data-scroll data-scroll-speed='-1' className="img is-reveal absolute left-[-200px] w-[600px] h-[100%] bg-cover bg-center border-t-[1px] border-black/30"></div>
            </div>

          </div>
        </div>
    </section>
);
};

export default Actors;