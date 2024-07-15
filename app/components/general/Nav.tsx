import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { TranslateButton } from '../buttons/TranslateButton';
import { gsap } from 'gsap';
import { useLocoScrollContext } from '../../../util/LocoScrollContext';

interface LocoScrollInstance {
  scrollTo: (target: Element | number, options: { duration?: number; offset?: number }) => void;
}

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const locoScrollInstance = useLocoScrollContext() as LocoScrollInstance | null;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement && locoScrollInstance) {
      locoScrollInstance.scrollTo(targetElement, {
        duration: 1000,
        offset: 0,
      });
    }
  };  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        if (isOpen) {
          gsap.fromTo(
            menuRef.current,
            { height: '0vh', opacity: 0 },
            {
              duration: 0.5,
              height: '100vh',
              opacity: 1,
              ease: 'none',
              onStart: () => {
                menuRef.current?.classList.remove('max-sm:hidden');
              },
            }
          );
        } else {
          gsap.fromTo(
            menuRef.current,
            { height: '100vh', opacity: 1 },
            {
              duration: 0.6,
              height: '0vh',
              opacity: 0.7,
              ease: 'none',
              onComplete: () => {
                menuRef.current?.classList.add('max-sm:hidden');
              },
            }
          );
        }
      } else {
        if (isOpen) {
          gsap.to(menuRef.current, {
            duration: 0.5,
            height: 'auto',
            opacity: 1,
            ease: 'none',
            onStart: () => {
              menuRef.current?.classList.remove('max-sm:hidden');
            },
          });
        } else {
          gsap.to(menuRef.current, {
            duration: 0.7,
            height: 'auto',
            opacity: 1,
            ease: 'power3.inOut',
            onComplete: () => {
              menuRef.current?.classList.add('max-sm:hidden');
            },
          });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
          max-sm:h-10 max-sm:w-10 max-sm:p-[4px] max-sm:border-[1px]"
        onClick={toggleMenu}
      >
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
        className="
          fixed max-sm:hidden max-sm:h-0 max-sm:border-y-[1px] max-sm:border-white max-sm:top-0 top-8 left-0 right-0 z-50
          flex max-sm:flex-col items-center justify-center sm:flex-row space-x-40
          sm:w-full sm:py-[14px]
          hover:duration-500 duration-500 hover:shadow-white/20 shadow-inner shadow-white/10
          border-y-[1px] wrapper border-black/80 backdrop-blur-3xl
          overflow-hidden">

        <ul className="
          flex flex-col max-sm:space-y-8 max-sm:justify-center max-sm:items-center max-sm:text-2xl sm:flex-row space-x-2 md:text-lg
          md:space-x-20 lg:text-xl xl:text-xl lg:space-x-40
          hover:text-white 2xl:text-xl"
        >
          <li className="sm:inline-block hidden">
            <Link
              href="/"
              onClick={(e) => handleScrollTo(e, 'home')}
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-black transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff] drop-shadow-[0_0.2px_5px_rgba(255,255,255,10)]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={(e) => handleScrollTo(e, 'actors')}
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-gray-300 transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"
            >
              Actors
            </Link>
          </li>
          <li>
            <Link
              href="/pages/about"
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-gray-300 transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff] drop-shadow-[0_0px_10px_rgba(0,0,0,10)]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={(e) => handleScrollTo(e, 'credits')}
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-gray-300 transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"
            >
              Credits
            </Link>
          </li>
        </ul>
        <TranslateButton />
      </nav>
    </div>
  );
};
