import Link from 'next/link';
import React, { useState } from 'react';
import { useLocoScrollContext } from '@/util/LocoScrollContext';
import { TranslateButton } from '../buttons/TranslateButton';
import { useTranslation } from "react-i18next";

interface LocoScrollInstance {
  scrollTo: (target: Element | number, options: { duration?: number; offset?: number }) => void;
}

export const Nav: React.FC = () => {
  const [t] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="w-screen mx-auto">
      <button
        className="
          menu-toggle-button
          fixed
          right-10 
          top-[10%] 
          z-[100]
          flex 
          items-center 
          justify-center 
          rounded-full 
          border-white 
          bg-black/40
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
        className={`
          fixed top-8 left-0 right-0 z-50 max-sm:h-[13rem]
          flex items-center justify-center sm:flex-row 
          sm:w-full sm:py-[50rem]
          md:py-[0.4rem] md:px-20 md:space-x-20 md:justify-center md:items-center md:text-lg
          lg:py-[0.2rem]
          xl:top-4 xl:py-[0.4rem]
          2xl:py-[0.5rem]
          border-y-[1px] border-white bg-black/80 backdrop-blur-sm
          overflow-hidden transform transition-all duration-500 ease-in-out
          ${isOpen ? 'max-sm:translate-y-0 max-sm:opacity-100' : 'max-sm:translate-y-[-100%] max-sm:opacity-0 max-sm:pointer-events-none'}
        `}
      >
        <ul className="
          flex flex-col max-sm:space-y-8 max-sm:justify-center max-sm:items-center max-sm:text-2xl sm:flex-row space-x-2 md:text-lg
          md:space-x-20 lg:text-lg xl:text-2xl lg:space-x-40
          hover:text-white 2xl:text-xl font-appleL tracking-[2px]"
        >
          <li className="sm:inline-block hidden">
            <Link
              href="/"
              onClick={(e) => handleScrollTo(e, 'home')}
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-gray-300 transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff] hover:drop-shadow-[0_0.2px_5px_rgba(255,255,255,10)]"
            >
              {t("main-header.nav.home")}
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
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff] hover:drop-shadow-[0_0.2px_5px_rgba(255,255,255,10)]"
            >
              {t("main-header.nav.actors")}
            </Link>
          </li>
          {/* <li>
            <Link
              href="/pages/about"
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-gray-300 transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff] hover:drop-shadow-[0_0.2px_5px_rgba(255,255,255,10)]"
            >
              {t("main-header.nav.about")}
            </Link>
          </li> */}
          <li>
            <Link
              href="/"
              onClick={(e) => handleScrollTo(e, 'credits')}
              className="
                relative max-sm:text-white bg-[linear-gradient(#00000000,#00000000),linear-gradient(#ffffff,#ffffff)]
                bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat
                text-gray-300 transition-[background-size,color] duration-300
                hover:bg-[0_2px,100%_2px] hover:text-[#ffffff] hover:drop-shadow-[0_0.2px_5px_rgba(255,255,255,10)]"
            >
              {t("main-header.nav.credits")}
            </Link>
          </li>
        </ul>
        <TranslateButton />
      </nav>
    </div>
  );
};

export default Nav;
