// Importing the Nav component
import { Nav } from '../nav';

// Importing Next.js Image component for optimized image handling
import Image from 'next/image';

// Importing image files
import cameraMan from '../../../public/homeImgs/homeBg/cameraMan.jpg';
import artAlbine from '../../../public/homeImgs/homeBg/artAlbine.jpg';
import albineMan from '../../../public/homeImgs/homeBg/albineMan.jpg';
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
      <div className="h-[100vh] border-b-[1px] border-white/30">
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <div className="
            animate-glow md:block animate-fade-left
            bg-gradient-to-r from-zinc-300/0 via-zinc-300/0 to-zinc-300/0" />
          <h1 className="
            z-10 text-2xl text-transparent duration-1000
            bg-white cursor-default text-edge-outline
            animate-title font-display sm:text-5xl md:text-6xl xl:text-8xl
            whitespace-nowrap bg-clip-text"> What about beauty? <br />
          </h1>
          <h3 className="
            z-10 text-2xl text-transparent duration-1000
            bg-white cursor-default text-edge-outline
            animate-title font-display sm:text-5xl md:text-6xl xl:text-3xl
            whitespace-nowrap bg-clip-text">Stories of Transformation
          </h3>
        </div>
      </div>

      {/* Absolute positioned images with hover effects */}
      <div className='absolute top-0 w-screen h-screen'>
        <Parallax scale={[1, 1]} translateX={[50, 0]} className="
          absolute left-[35%] bottom-36
          border-[1px] border-white/10 rounded
          h-60 w-44
          sm:left-[49%] sm:bottom-20 sm:h-52 sm:w-44
          md:left-[56%] md:h-72 md:w-56 md:bottom-28
          xl:h-80 xl:w-80 xl:left-[50%] xl:bottom-12
          2xl:h-[25rem] 2xl:w-[20rem] 2xl:left-[55%] 2xl:bottom-[1rem]
          hover:translate-x-5 hover:duration-300
          duration-300">
          <Image
            fill
            src={artAlbine.src}
            alt="Picture of the author"
          />
        </Parallax>
        <Parallax scale={[1, 1]} translateX={[-50, 0]} className="
          absolute left-[65%] top-6
          border-[1px] border-white/10 rounded
          h-52 w-36
          sm:left-[67%] sm:top-3
          md:left-[78%] md:h-60 md:w-44
          xl:left-[84%] xl:h-72 xl:w-52 xl:top-16
          2xl:h-96 2xl:w-72 2xl:top-16
          hover:-translate-x-1 hover:translate-y-1 hover:duration-300
          duration-300">
          <Image
            fill
            src={secondPhoto.src}
            alt="Picture of the author"
          />
        </Parallax>
        <Parallax scale={[1, 1]} translateX={[50, 0]} className="
          absolute top-16 -left-[4%]
          border-[1px] border-white/10 rounded
          h-52 w-36
          sm:top-10 sm:h-56 sm:w-44
          md:-left-[4%] md:h-80 md:w-60
          xl:h-96 xl:w-[18rem]
          2xl:h-[30rem] 2xl:w-[20rem] 2xl:-left-[4%]
          hover:translate-y-3 hover:duration-300
          duration-300">
          <Image
            fill
            src={cameraMan.src}
            alt="Picture of the author"
          />
        </Parallax>
        <Parallax scale={[1, 1]} translateX={[50, 0]} className="
          absolute right-72 bottom-24 z-20
          border-[1px] border-white/40 rounded
          h-60 w-40
          sm:right-[80%] sm:bottom-30 sm:h-52 sm:w-36
          md:h-60 md:w-44 md:right-[80%] md:bottom-28
          xl:h-52 xl:w-46 xl:left-0 xl:bottom-0
          2xl:h-80 2xl:w-64 2xl:left-0 2xl:bottom-[0rem]
          hover:translate-x-5 hover:-translate-y-2 hover:duration-300
          duration-300">
          <Image
            fill
            src={albineMan.src}
            alt="Picture of the author"
          />
        </Parallax>

        <div className="
          absolute bottom-[25%] left-[50%]
          transform -translate-x-1/2 -translate-y-1/2
          border-[1px] border-white/10 rounded
          h-64 w-52
          sm:h-72 sm:w-52 sm:bottom-20 sm:left-[47%]
          md:left-[46%] md:bottom-10 md:h-[500px] md:w-[350px]
          xl:h-[30rem] xl:w-[25rem] xl:-bottom-[20%] xl:right-[425px]
          2xl:h-[40rem] 2xl:w-[32rem] 2xl:right-[450px] 2xl:-bottom-[18%]">
          <Image
            fill
            src={girlPick.src}
            alt="Picture of the author"
          />
        </div>

        <Parallax scale={[1, 1]} translateX={[-30, 0]} className="
          absolute right-32 top-36
          border-[1px] border-white/10 rounded
          h-0 w-0
          sm:w-0 sm:h-0
          md:h-44 md:w-36 md:right-36 md:top-48
          xl:h-[13rem] xl:w-[10rem] xl:top-36 xl:right-52
          2xl:h-64 2xl:w-52 2xl:right-[15rem] 2xl:top-[9rem]
          hover:-translate-x-5 hover:-translate-y-2 hover:duration-300
          duration-300">
          <Image
            fill
            src={buttersHead.src}
            alt="Picture of the author"
          />
        </Parallax >
        <Parallax scale={[1, 1]} translateX={[-50, 0]} className="
          absolute right-60 top-40
          border-[1px] border-white/10 rounded
          h-0 w-0
          sm:w-0 sm:h-0
          md:h-40 md:w-32 md:left-20 md:top-80
          xl:left-[23rem] xl:h-52 xl:w-48 xl:top-[55%]
          2xl:h-72 2xl:w-52 2xl:left-[25rem] 2xl:top-[55%]
          hover:translate-x-3 hover:translate-y-3 hover:duration-300
          duration-300">
          <Image
            fill
            src={shadowGirl.src}
            alt="Picture of the author"
          />
        </Parallax >
      </div >

    </header >
  );
};
