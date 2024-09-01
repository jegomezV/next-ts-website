import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useTranslation } from "react-i18next";
import photos from './photosGallery/photos';

const GalleryJeffry: React.FC = (): JSX.Element => {
  const { t } = useTranslation("global");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedPhoto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhoto]);

  return (
    <section className='relative w-full py-16 bg-slate-200'>
      <div className='max-w-7xl mx-auto'>
        <h1 
          data-scroll 
          data-scroll-speed="-0.2"
          className="text-5xl p-2 text-center text-transparent duration-1000 bg-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl bg-clip-text"
        >
          {t("actors.jeffry.titleG")}
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-8'>
          {photos.map((photo, index) => (
            <div key={index} className='relative w-full h-[40vw]'>
              <Image 
                src={photo} 
                alt={`Jeffry Biography ${index + 1}`} 
                fill 
                objectFit="cover" 
                placeholder="blur" 
                className='drop-shadow-[0_1.5px_20px_rgba(0,0,0,1)] hover:scale-105 transition-transform duration-200 cursor-pointer'
                onClick={() => setSelectedPhoto(photo.src)}
              />
            </div>
          ))}
        </div>

        {selectedPhoto && createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedPhoto(null)}>
            <div className="relative w-11/12 max-w-xl h-auto">
              <Image 
                src={selectedPhoto} 
                alt="Selected Image" 
                layout="responsive" 
                width={100} 
                height={75} 
                objectFit="contain" 
                className='cursor-pointer' 
              />
              <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelectedPhoto(null)}>✕</button>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}

export default GalleryJeffry;