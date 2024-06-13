// Importing the Nav component
import { Nav } from '../nav';

// Importing Next.js Image component for optimized image handling
import Image from 'next/image';

// Importing image files
import cameraMan from '../../../public/homeImgs/homeBg/cameraMan.jpg';
import albineGirl from '../../../public/homeImgs/homeBg/albineGirl.jpg';
import artAlbine from '../../../public/homeImgs/homeBg/artAlbine.jpg';
import secondPhoto from '../../../public/homeImgs/secondPhoto.jpg';
import girlPick from '../../../public/homeImgs/homeBg/girlPick.jpg';
import buttersHead from '../../../public/homeImgs/homeBg/buttersHead.jpg';
import shadowGirl from '../../../public/homeImgs/homeBg/shadowGirl.jpg';

// Importing Parallax component from react-scroll-parallax for parallax effect
import { Parallax } from 'react-scroll-parallax';

// HeaderM component definition
export const HeaderM: React.FC = (): JSX.Element => {
  return (
    <header className="">
      {/* Navigation bar component */}
      <Nav />

      {/* Main header section with title */}
      <div className='h-[100vh] border-b-[1px] border-white/30'>
        <div className="w-screen h-full flex items-center justify-center">
          <div className="animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/0 to-zinc-300/0" />
          <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-6xl xl:text-8xl whitespace-nowrap bg-clip-text">
            What about beauty?
          </h1>
        </div>
      </div>

      {/* Absolute positioned images with hover effects */}
      <div className='absolute top-0 w-screen h-screen'>
        <Image
          width={1200}
          height={1200}
          className='absolute left-40 bottom-10 h-60 w-44 sm:left-10 lg:left-36 border-[1px] xl:h-72 xl:w-64 xl:left-40 xl:bottom-7 border-white/30 hover:translate-x-5 hover:duration-300 duration-300'
          src={artAlbine.src}
          alt="Picture of the author"
        />

        <Image
          width={1200}
          height={1200}
          className='absolute right-16 h-52 w-36 lg:top-16 lg:right-4 border-[1px] border-white/30 hover:-translate-x-1 hover:translate-y-1 hover:duration-300 duration-300'
          src={secondPhoto.src}
          alt="Picture of the author"
        />

        <Image
          width={1200}
          height={1200}
          className='absolute top-10 h-72 w-32 sm:top-20 sm:h-52 sm:w-40 border-[1px] xl:h-64 xl:w-[250px] border-white/30 hover:translate-y-3 hover:duration-300 duration-300'
          src={cameraMan.src}
          alt="Picture of the author"
        />

        <Image
          width={1200}
          height={1200}
          className='absolute right-80 bottom-0 h-60 w-44 sm:right-12 lg:right-72 border-[1px] xl:h-72 xl:w-52 xl:right-72 border-white/30 hover:translate-x-5 hover:-translate-y-2 hover:duration-300 duration-300'
          src={albineGirl.src}
          alt="Picture of the author"
        />

        <Image
          width={1200}
          height={1200}
          className='absolute -bottom-28 sm:h-72 sm:w-52 sm:bottom-10 sm:right-[70px] lg:right-72 lg:-bottom-20 xl:h-[450px] xl:w-[330px] xl:-bottom-24 xl:right-[425px] h-96 lg:h-[400px] lg:w-[300px] w-60 right-1/4 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-white/30'
          src={girlPick.src}
          alt="Picture of the author"
        />

        <Image
          width={1200}
          height={1200}
          className='absolute right-32 top-36 h-36 w-24 sm:w-0 sm:h-0 md:h-36 md:w-24 lg:top-64 xl:h-44 xl:w-32 xl:top-64 xl:right-24 border-[1px] border-white/30 hover:-translate-x-5 hover:-translate-y-2 hover:duration-300 duration-300'
          src={buttersHead.src}
          alt="Picture of the author"
        />

        <Image
          width={1200}
          height={1200}
          className='absolute right-60 top-40 sm:w-0 sm:h-0 h-60 w-36 md:h-40 md:w-28 md:left-40 md:top-60 lg:left-[40rem] lg:top-44 xl:left-[49rem] xl:h-44 xl:w-36 xl:top-32 border-[1px] border-white/30 hover:translate-x-3 hover:translate-y-3 hover:duration-300 duration-300'
          src={shadowGirl.src}
          alt="Picture of the author"
        />
      </div>
    </header>
  );
};
