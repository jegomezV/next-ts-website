import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ limitCallbacks: true });

interface LazyLoadProps {
  src: string;
  dataSrc: string;
  type?: "img" | "video";
  alt?: string;
  [key: string]: any;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ src, dataSrc, type = "img", ...props }) => {
  const elementRef = useRef<HTMLDivElement | HTMLVideoElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    let newSRC = dataSrc;
    let newElement: HTMLImageElement | HTMLVideoElement;

    const loadImage = () => {
      if (type === "img" && element instanceof HTMLImageElement) {
        newElement.onload = () => {
          newElement.onload = null;
          newElement.src = element.src;
          element.src = newSRC;

          gsap.set(newElement, {
            position: "absolute",
            top: element.offsetTop,
            left: element.offsetLeft,
            width: element.offsetWidth,
            height: element.offsetHeight,
          });

          if (element.parentNode) {
            element.parentNode.appendChild(newElement);
          }
          gsap.to(newElement, {
            opacity: 0,
            onComplete: () =>
              newElement.parentNode && newElement.parentNode.removeChild(newElement),
          });
          st && st.kill();
        };

        newElement.src = newSRC;
      } else if (type === "video" && element instanceof HTMLVideoElement) {
        newElement.oncanplay = () => {
          newElement.oncanplay = null;
          newElement.src = element.src;
          element.src = newSRC;

          gsap.set(newElement, {
            position: "absolute",
            top: element.offsetTop,
            left: element.offsetLeft,
            width: element.offsetWidth,
            height: element.offsetHeight,
          });

          if (element.parentNode) {
            element.parentNode.appendChild(newElement);
          }
          gsap.to(newElement, {
            opacity: 0,
            onComplete: () =>
              newElement.parentNode && newElement.parentNode.removeChild(newElement),
          });
          st && st.kill();
        };

        newElement.src = newSRC;
      }
    };

    const st = ScrollTrigger.create({
      trigger: element as Element,
      start: "-50% bottom",
      onEnter: loadImage,
      markers: true,
      onEnterBack: loadImage,
    });

    return () => {
      st && st.kill();
    };
  }, [dataSrc, type]);

  // Renderizar según el tipo (imagen o video)
  if (type === "img") {
    return (
      <div ref={elementRef}>
        <Image
          src={src}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
          {...props}
        />
      </div>
    );
  } else if (type === "video") {
    return (
      <video
        muted={true}
        playsInline={true}
        autoPlay={true}
        loop={true}
        controls={false}
        ref={elementRef as React.RefObject<HTMLVideoElement>}
        src={src}
        {...props}
      />
    );
  }

  return null;
};

export default LazyLoad;
