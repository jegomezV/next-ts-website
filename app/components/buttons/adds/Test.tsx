'use client';
import React, { useEffect, useRef } from 'react';

interface ParallaxSliderProps {}

const ParallaxSlider: React.FC<ParallaxSliderProps> = () => {
  const slider = useRef<HTMLDivElement>(null);
  let sliderWidth: number;
  let imageWidth: number;
  let current: number = 0;
  let target: number = 0;
  const ease: number = 0.06;
  let images: HTMLElement[] = [];

  useEffect(() => {
    images = Array.from(document.querySelectorAll('.img'));
    images.forEach((image, idx) => {
      if (image instanceof HTMLElement) {
        image.style.backgroundImage = `url(./Parallax/p${idx + 1}.jpg)`;
      }
    });

    const lerp = (start: number, end: number, t: number): number => {
      return start * (1 - t) + end * t;
    };

    const setTransform = (el: HTMLElement, transform: string) => {
      el.style.transform = transform;
    };

    const init = () => {
      if (slider.current) {
        sliderWidth = slider.current.getBoundingClientRect().width;
        imageWidth = sliderWidth / images.length;
        document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
      }
    };

    const animateImages = () => {
      let ratio = current / imageWidth;
      let intersectioRatioValue: number;

      images.forEach((image, idx) => {
        if (image instanceof HTMLElement) {
          intersectioRatioValue = ratio - idx * 0.7;
          setTransform(image, `translateX(${intersectioRatioValue * 70}px)`);
        }
      });
    };

    const animate = () => {
      current = parseFloat(lerp(current, target, ease).toFixed(2));
      target = window.scrollY;
      if (slider.current) {
        setTransform(slider.current, `translateX(${-current}px)`);
      }
      animateImages();
      requestAnimationFrame(animate);
    };

    init();
    animate();
  }, []);

  return (
    <div className='relative'>
      <section className="absolute -top-[0] left-[0] w-[100%] h-[100vh] ">
        <div ref={slider} className="absolute top-0 left-0 w-[2700px] h-[100%]">
          <div className=" absolute top-[15%] h-[70%] w-[100%] flex justify-around">
            <div className="relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>

            <div className="relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>

            <div className="relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>
            <div className=" relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>
            <div className=" relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>
            <div className=" relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ParallaxSlider;