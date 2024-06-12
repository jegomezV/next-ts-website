import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

import voguePhoto from '../../public/homeImgs/homeBg/voguePhoto.jpg';
import blurHead from '../../public/homeImgs/homeBg/blurHead.jpg';
import cameraMan from '../../public/homeImgs/homeBg/cameraMan.jpg';
import waterGirl from '../../public/homeImgs/homeBg/waterGirl.jpg';
import threesome from '../../public/homeImgs/homeBg/threesome.jpg';
import manPick from '../../public/homeImgs/homeBg/manPick.jpg';
import yellowGlasses from '../../public/homeImgs/homeBg/yellowGlasses.jpg';
import albineGirl from '../../public/homeImgs/homeBg/albineGirl.jpg';
import artAlbine from '../../public/homeImgs/homeBg/artAlbine.jpg';
import girlPick from '../../public/homeImgs/homeBg/girlPick.jpg';

import firstPhoto from '../../public/homeImgs/firstPhoto.jpg';
import secondPhoto from '../../public/homeImgs/secondPhoto.jpg';
import thirdPhoto from '../../public/homeImgs/thirdPhoto.jpg';

export const HeaderImages: React.FC = (): JSX.Element => {
  return (
    <div className="absolute inset-0 w-screen h-full border-2 overflow-hidden">
      <Parallax scale={[1, 1]} translateX={[-10, 10]}>
        <div className='relative border-[1px] h-[18rem] w-[12rem] border-white/20 -right-[75%] -bottom-[2.5rem] hover:-translate-x-10 hover:-translate-y-4 hover:duration-300 duration-300 overflow-hidden'>
          <Image
            layout="fill"
            objectFit="cover"
            src={secondPhoto.src}
            alt="Picture of the author"
            priority={true}
          />
        </div>
      </Parallax>

      <Parallax scale={[1, 1]} translateX={[4, -10]}>
        <div className='relative border-[1px] left-[2.5rem] border-white/40 h-[18rem] w-[13rem] overflow-hidden -top-[16rem] hover:translate-x-4 hover:translate-y-4 hover:duration-300 duration-300'>
          <Image
            layout="fill"
            objectFit="cover"
            src={cameraMan.src}
            alt="Picture of the author"
            priority={true}
          />
        </div>
      </Parallax>

      <Parallax scale={[1, 1]} translateX={[1, -10]}>
        <div className='relative border-[1px] h-[16rem] w-[11rem] border-white/20 -right-[46rem] bottom-[18rem] hover:translate-x-10 hover:-translate-y-2 hover:duration-300 duration-300 overflow-hidden'>
          <Image
            layout="fill"
            objectFit="cover"
            src={albineGirl.src}
            alt="Picture of the author"
            priority={true}
          />
        </div>
      </Parallax>

      <Parallax scale={[1, 1]} translateX={[1, 40]}>
        <div className='relative inset-0 left-2/4 -top-[48rem] h-[16rem] w-[13rem] border-[1px] border-white/20 overflow-hidden'>
          <Image
            layout="fill"
            objectFit="cover"
            src={girlPick.src}
            alt="Picture of the author"
            priority={true}
          />
        </div>
      </Parallax>

      <Parallax scale={[1, 1]} translateX={[4, -10]}>
        <div className='relative border-[1px] left-[2.5rem] border-white/40 h-[18rem] w-[13rem] overflow-hidden -top-[15rem] hover:translate-x-4 hover:translate-y-4 hover:duration-300 duration-300'>
          <Image
            layout="fill"
            objectFit="cover"
            src={cameraMan.src}
            alt="Picture of the author"
            priority={true}
          />
        </div>
      </Parallax>
    </div>
  );
};
