import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LazyLoad = ({ src, alt }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(imageElement, { duration: 1, opacity: 1, ease: 'power2.inOut' });
          observer.unobserve(imageElement);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className="opacity-0"
    />
  );
};

export default LazyLoad;
