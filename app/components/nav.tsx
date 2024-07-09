import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { TranslateButton } from './buttons/TranslateButton';
import { gsap } from 'gsap';


export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        duration: 1,
        height: '100vh',
        ease: "expo.out",
        onStart: () => {
          menuRef.current?.classList.remove('max-sm:hidden');
        },
      });

    } else {
      gsap.to(menuRef.current, {
        duration: 0.6,
        height: '-1vh',
        ease: "expo.out",
        onComplete: () => {
          menuRef.current?.classList.add('max-sm:hidden');
        },
      });
    }
  }, [isOpen]);

  return (
    <div className='w-screen mx-auto'>
      <button
        className="
                menu-toggle-button
                fixed 
                right-[6px] 
                top-[4.9rem] 
                z-[100]
                flex 
                items-center 
                justify-center 
                rounded-full 
                border-white 
                backdrop-blur-3xl 
                menu-toggle-button 
                max-sm:h-10 max-sm:w-10 max-sm:p-[4px] max-sm:border-[1px]"
        onClick={toggleMenu}>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-white max-sm:w-10 max-sm:h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <nav 
        ref={menuRef}
        className='
          fixed max-sm:hidden max-sm:h-0 max-sm:border-y-[1px] max-sm:border-white top-8 left-0 right-0 mx-auto mt-0 py-10 z-50
          flex max-sm:flex-col items-center justify-center sm:flex-row space-x-40
          sm:w-[100%] sm:mx-auto sm:py-[14px]
          hover:duration-500 duration-500 hover:shadow-white/20 shadow-inner shadow-white/10
          border-y-[1px] wrapper border-white/20 backdrop-blur-3xl
          overflow-hidden'>

        <ul className="
          flex flex-col max-sm:space-y-8 max-sm:justify-center max-sm:items-center sm:flex-row space-x-2 md:text-sm
          md:space-x-20 lg:text-base xl:text-base lg:space-x-40
          hover:text-white text-xl">

          <li className="sm:inline-block hidden">
            <Link
              href="/"
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-gray-300 transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/about"
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-gray-300 transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> About
            </Link>
          </li>
          <li>
            <Link
              href="/pages/credits"
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-gray-300 transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> Credits
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
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
