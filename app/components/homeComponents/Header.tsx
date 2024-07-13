// Importing the Nav component
import { Nav } from '../general/Nav';

// Importing Next.js Image component for optimized image handling
import Image from 'next/image';

// Importing image files
import firstPhoto from '@/public/homeImgs/homeBg/firstPhoto.jpg';
import pasarellaPhoto from '@/public/homeImgs/homeBg/pasarellaPhoto.jpg';
import mainJefreyPhoto from '@/public/homeImgs/homeBg/mainJefreyPhoto.jpg';
import mainSecondPhoto from '@/public/homeImgs/homeBg/mainSecondPhoto.jpg';
import principalPhoto from '@/public/homeImgs/homeBg/principalPhoto.jpg';
import buttersHead from '@/public/homeImgs/homeBg/buttersHead.jpg';
import shadowGirl from '@/public/homeImgs/homeBg/shadowGirl.jpg';
import useLocoScroll from '../hooks/useLocoScroll';

// HeaderM component definition
export const HeaderM: React.FC = (): JSX.Element => {
  return (
    <header id='home'>
      {/* Navigation bar component */}

      {/* Main header section with title */}
      <div className="h-[100vh]">
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <div className="
            animate-glow md:block animate-fade-left
            bg-gradient-to-r from-zinc-300/0 via-zinc-300/0 to-zinc-300/0" />
          <h1 className="
            z-10 text-2xl text-transparent duration-1000
            bg-white cursor-default
            animate-title font-display sm:text-5xl md:text-6xl xl:text-8xl
            whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]"> What about beauty? <br />
          </h1>
          <h3 className="
            z-10 text-2xl text-transparent duration-1000
            bg-white cursor-default
            animate-title font-display sm:text-5xl md:text-6xl xl:text-3xl
            whitespace-nowrap bg-clip-text drop-shadow-[0_0.1px_0.8px_rgba(255,255,255,0.8)]">Stories of Transformation
          </h3>
        </div>
      </div>

      {/* Absolute positioned images with hover effects */}
      <div className='absolute top-0 w-screen h-screen'>
        <div className="
                  absolute left-[35%] bottom-36
                  drop-shadow-[0_1.5px_20px_rgba(0,0,0,2)]
                  h-60 w-44
                  sm:left-[49%] sm:bottom-20 sm:h-52 sm:w-44
                  md:left-[56%] md:h-72 md:w-56 md:bottom-28
                  lg:left-[53%] lg:bottom-0 lg:h-[20rem] lg:w-[20rem]
                  xl:h-80 xl:w-80 xl:left-[50%] xl:bottom-4
                  2xl:h-[15rem] 2xl:w-[25rem] 2xl:left-[70%] 2xl:bottom-[1rem]
                  hover:translate-x-5 hover:duration-300
                  duration-300">
          <Image
            fill
            src={pasarellaPhoto.src}
            alt="Picture of the author"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            priority
          />
        </div>

        <div className="
                  absolute left-[61%] top-6
                  drop-shadow-[0_1.5px_20px_rgba(0,0,0,0.8)]
                  h-52 w-36
                  sm:left-[67%] sm:top-3
                  md:left-[78%] md:h-60 md:w-44
                  lg:h-[22rem] lg:w-[17rem] lg:left-[80%] lg:top-3
                  xl:left-[84%] xl:h-[20rem] xl:w-[16rem] xl:top-16
                  2xl:h-96 2xl:w-72 2xl:top-16 2xl:-right-[4rem]
                  hover:-translate-x-1 hover:translate-y-1 hover:duration-300
                  duration-300">
          <Image
            fill
            src={mainSecondPhoto.src}
            alt="Picture of the author"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            priority
            className='border-[1px] border-black/40'
          />
        </div>

        <div className="
                  absolute top-16 -left-[4%]
                  bdrop-shadow-[0_1.5px_20px_rgba(0,0,0,5)]
                  h-52 w-36
                  sm:top-10 sm:h-56 sm:w-44
                  md:-left-[4%] md:h-80 md:w-60
                  xl:h-96 xl:w-[18rem]
                  2xl:h-[30rem] 2xl:w-[20rem] 2xl:left-[4rem]
                  hover:translate-y-3 hover:duration-300
                  duration-300">
          <Image
            fill
            src={firstPhoto.src}
            alt="Picture of the author"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            priority
            className='border-[1px] border-slate-800'
          />
        </div>

        <div className="
                absolute right-72 bottom-24 z-20
                drop-shadow-[0_1.5px_20px_rgba(0,0,0,1.5)]
                h-60 w-40
                sm:right-[80%] sm:bottom-30 sm:h-52 sm:w-36
                md:h-60 md:w-44 md:right-[80%] md:bottom-28
                lg:right-[70%] lg:bottom-4 lg:h-[17rem] lg:w-[12rem]
                xl:h-[13rem] xl:w-[13rem] xl:left-4 xl:bottom-0
                2xl:h-[16rem] 2xl:w-[14rem] 2xl:left-[10rem] 2xl:bottom-0
                hover:translate-x-5 hover:-translate-y-2 hover:duration-300
                duration-300">
          <Image
            fill
            src={mainJefreyPhoto.src}
            alt="Picture of the author"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            priority
            className='border-[1px] border-black/70'
          />
        </div>


        <div className="
                      absolute bottom-[25%] left-[50%]
                      transform -translate-x-1/2 -translate-y-1/2
                      rounded drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)]
                      h-64 w-52
                      sm:h-72 sm:w-52 sm:bottom-20 sm:left-[47%]
                      md:left-[46%] md:top-[17rem] md:h-[500px] md:w-[350px]
                      lg:top-[20rem]
                      xl:h-[32rem] xl:w-[30rem] xl:top-[20rem] xl:right-[425px]
                      2xl:h-[40rem] 2xl:w-[37rem] 2xl:right-[450px] 2xl:top-[21rem]">
          <Image
            fill
            src={principalPhoto.src}
            alt="Picture of the author"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            priority
            className='border-[1px] border-black'
          />
        </div>


        <div className="
                absolute right-32 top-36
                h-0 w-0
                sm:w-0 sm:h-0
                md:h-44 md:w-36 md:right-36 md:top-48
                lg:h-[10rem] lg:w-[8rem] lg:right-[12rem] lg:top-[15rem]
                xl:h-[11rem] xl:w-[9rem] xl:top-[11rem] xl:right-52
                2xl:h-64 2xl:w-52 2xl:right-[16rem] 2xl:top-[9rem]
                hover:-translate-x-5 hover:-translate-y-2 hover:duration-300
                drop-shadow-[0_1.5px_20px_rgba(0,0,0,2)] duration-300">
          <Image
            fill
            src={buttersHead.src}
            alt="Picture of the author"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            priority
            className='border-[1px] border-black/30'
          />
        </div>

      </div >

    </header >
  );
};
