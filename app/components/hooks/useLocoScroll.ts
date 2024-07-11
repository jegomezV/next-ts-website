import { useEffect } from "react";
import 'locomotive-scroll/src/locomotive-scroll.scss';

export default function useLocoScroll(start: boolean) {
  useEffect(() => {
    if (!start) return;

    // Verificar que estamos en el lado del cliente
    if (typeof window === 'undefined') {
      return;
    }

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scrollEl = document.querySelector("#main-container") as HTMLElement;

      if (scrollEl && LocomotiveScroll) {
        console.log('LocomotiveScroll initializing...');
        
        const locoScrollInstance = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          multiplier: 0.8,
          direction: "vertical",
          class: "is-reveal",
        });
        
        console.log('LocomotiveScroll initialized');
      }
    };

    initLocomotiveScroll();
  }, [start]);
}
