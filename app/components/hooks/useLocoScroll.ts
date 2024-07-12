// useLocoScroll.ts
import { useEffect, useState, useRef } from "react";
import 'locomotive-scroll/src/locomotive-scroll.scss';

export default function useLocoScroll(start: boolean) {
  const [locoScroll, setLocoScroll] = useState(null);
  const locoScrollRef = useRef(locoScroll);

  useEffect(() => {
    if (!start || typeof window === 'undefined') return;

    let locoScrollInstance: any = null;

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scrollEl = document.querySelector("#main-container") as HTMLElement;

        if (scrollEl) {
          locoScrollInstance = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 0.8,
            direction: "vertical",
            class: "is-reveal",
          });
          setLocoScroll(locoScrollInstance);
          locoScrollRef.current = locoScrollInstance;
        }
      } catch (error) {
        console.error("Error initializing LocomotiveScroll:", error);
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locoScrollInstance) {
        locoScrollInstance.destroy();
      }
    };
  }, [start]);

  return locoScrollRef.current;
}
