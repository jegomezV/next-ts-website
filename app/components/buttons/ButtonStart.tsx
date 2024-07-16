import React from 'react';
import { useLocoScrollContext } from '@/util/LocoScrollContext';

const ButtonStart: React.FC = () => {
    // Assuming `useLocoScrollContext` returns a type that could be null or has scrollTo method, explicitly type it.
    const locoScroll = useLocoScrollContext() as { scrollTo: (y: number, options: { duration: number, easing: [number, number, number, number] }) => void } | null;

    const scrollToTop = () => {
        if (locoScroll) {
            locoScroll.scrollTo(0, {
                duration: 700,
                easing: [0.25, 0.0, 0.35, 1.0],
            });
        }
    };

    return (
        <button
            onClick={scrollToTop}
            className="
                fixed z-40 
                bottom-12 xs:bottom-6 sm:bottom-4 md:bottom-6 
                right-10 xs:right-2 sm:right-3 
                hover:shadow-none 
                border border-white/20 
                -rotate-90 
                group 
                inline-flex items-center justify-center 
                h-10 w-10 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:w-12 md:h-12 
                overflow-hidden rounded-full 
                bg-neutral-950 
                font-medium text-neutral-200
                transition-all duration-300 ease-in-out"
            aria-label="Scroll to top"
        >
            <div className="transform translate-x-0 transition-transform duration-200 group-hover:translate-x-[300%]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 xs:h-5 xs:w-5 md:h-7 md:w-7"
                >
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
            </div>
            <div className="absolute transform -translate-x-[300%] transition-transform duration-300 group-hover:translate-x-0">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 xs:h-5 xs:w-5 md:h-7 md:w-7">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
            </div>
        </button>
    );
};

export default ButtonStart;
