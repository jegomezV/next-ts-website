"use client"

import React, { useRef, useState } from 'react';
import { ReactNode } from 'react';



interface CardSpotlightProps {
  children: ReactNode;
  configs: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({ children, configs }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${configs} opacity-60 hover:opacity-100 relative shadow-inner shadow-black duration-200 hover:duration-200 mx-auto flex h-full w-full hover:shadow-sm hover:shadow-white z-50 items-center justify-center overflow-hidden rounded-3xl border-[1px] border-white bg-transparent backdrop-blur-xl px-8 py-8`}
    >
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 30%)`,
        }}
      />
      {children}
    </div>
  );
};

export default CardSpotlight;
