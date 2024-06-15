import Link from 'next/link';
import React from 'react';
// import dynamic from 'next/dynamic';
import { TranslateButton } from './buttons/TranslateButton';

export const Nav: React.FC = () => {
  return (
    <div className='w-screen mx-auto'>
      <nav className="fixed top-0 w-[100%] mx-auto py-3 lg:py-[14px] z-20 hover:duration-500 duration-500 hover:shadow-white/20 shadow-inner shadow-white/10 border-y-[1px] wrapper border-white/20 mt-3 flex justify-center items-baseline backdrop-blur-3xl">
        <ul className="flex xs:text-xs sm:text-base sm:space-x-6 md:text-sm xs:space-x-4 md:space-x-20 lg:text-base xl:text-base lg:space-x-40 hover:text-white text-xl">
          <li>
            <Link href="/" className="relative bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-gray-400 transition-[background-size,color] duration-300 hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="relative bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-gray-400 transition-[background-size,color] duration-300 hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]">
              About
            </Link>
          </li>
          <li>
            <Link href="/credits" className="relative bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-gray-400 transition-[background-size,color] duration-300 hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]">
              Credits
            </Link>
          </li>
          <li>
            <Link href="/models" className="relative bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-gray-400 transition-[background-size,color] duration-300 hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]">
              Models
            </Link>
          </li>
        </ul>
        <TranslateButton />
      </nav>
      </div>
  );
};

// export default dynamic(() => Promise.resolve(Nav), { ssr: false });
