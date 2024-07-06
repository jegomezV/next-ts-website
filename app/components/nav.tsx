import Link from 'next/link';
import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
import { TranslateButton } from './buttons/TranslateButton';

export const Nav: React.FC = () => {
  
  return (
    <div className='w-screen mx-auto'>
      <button className="fixed z-40 menu-toggle-button right-[6px] top-[3rem] max-sm:p-[4px] max-sm:border-[1px] rounded-full border-white max-sm:h-10 max-sm:w-10 flex justify-center items-center backdrop-blur-3xl">
        {/* Icono del menú aquí */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="max-sm:w-10 max-sm:h-10 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <nav className="
                    fixed max-sm:border-y-[1px] max-sm:border-white  top-8 left-0 right-0 mx-auto mt-3 py-3 z-50
                    flex justify-center items-baseline space-x-40
                    max-sm:py-[20%]
                    sm:w-[100%] sm:mx-auto sm:py-[14px]
                    hover:duration-500 duration-500 hover:shadow-white/20 shadow-inner shadow-white/10
                    border-y-[1px] wrapper border-white/20 backdrop-blur-3xl
                    transform -translate-y-1/2 max-sm:top-1/2">

        <ul className="
                    flex flex-col max-sm:space-y-8 max-sm:justify-center max-sm:items-start max-sm:text-right sm:flex-row md:flex-row xl:flex-row 2xl:flex-row space-x-2 md:text-sm
                    md:space-x-20 lg:text-base xl:text-base lg:space-x-40
                    hover:text-white text-xl">

          <li className="sm:inline-block hidden">
            <Link
              href="/"
              className="
                      relative bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                      bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                      text-gray-300 transition-[background-size,color] duration-300
                      hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/about"
              className="
                      relative bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                      bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                      text-gray-300 transition-[background-size,color] duration-300
                      hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> About
            </Link>
          </li>
          <li>
            <Link
              href="/pages/credits"
              className="
          relative bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
          bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
          text-gray-300 transition-[background-size,color] duration-300
          hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> Credits
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="
          relative bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
          bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
          text-gray-300 transition-[background-size,color] duration-300
          hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> Models
            </Link>
          </li>
        </ul>
        <TranslateButton />
      </nav>

    </div>
  );
};
