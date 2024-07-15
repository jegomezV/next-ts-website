import { useEffect, useState, useRef } from "react";
import 'locomotive-scroll/src/locomotive-scroll.scss';

// Definimos el tipo para el objeto LocomotiveScroll
type LocomotiveScrollType = {
  destroy: () => void;
  update: () => void;
  start: () => void;
  stop: () => void;
};

export default function useLocoScroll(start: boolean): LocomotiveScrollType | null {
  const [locoScroll, setLocoScroll] = useState<LocomotiveScrollType | null>(null);
  const locoScrollRef = useRef<LocomotiveScrollType | null>(null);

  useEffect(() => {
    let locoScrollInstance: LocomotiveScrollType | null = null;

    const initLocomotiveScroll = async () => {
      try {
        const { default: LocomotiveScroll } = await import('locomotive-scroll');

        const scrollEl = document.querySelector("#main-container") as HTMLElement;

        if (scrollEl) {
          locoScrollInstance = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 0.9,
            lerp: 0.1,
          });

          setLocoScroll(locoScrollInstance);
          locoScrollRef.current = locoScrollInstance;
        }
      } catch (error) {
        console.error("Error initializing LocomotiveScroll:", error);
      }
    };

    if (start && typeof window !== 'undefined') {
      initLocomotiveScroll();
    }

    return () => {
      if (locoScrollInstance) {
        locoScrollInstance.destroy();
        setLocoScroll(null);
        locoScrollRef.current = null;
      }
    };
  }, [start]);

  return locoScrollRef.current;
}
