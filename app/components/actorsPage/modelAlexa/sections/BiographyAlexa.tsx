import React from 'react';
import Image from 'next/image';
import mainPhoto from '@/public/homeImgs/actorsModals/alexaModal/AlexaMain.jpg';
import { useTranslation } from "react-i18next";

const BiographyAlexa: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-slate-200 overflow-x-clip mb-[5rem] md:mb-24 lg:mb-0'>
      <div className='max-w-7xl mx-auto flex flex-col gap-8'>
        <div className='relative flex justify-center'>
          <div className='absolute bg-black/40 backdrop-blur-xl rounded-2xl top-0 flex justify-center w-[60%]'>
            <h2 data-scroll data-scroll-speed="-0.2"
              className="text-2xl md:text-3xl lg:text-6xl py-3 px-6 rounded-2xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white">
              {t("actors.alexa.titleB")}
            </h2>
          </div>
          <div className='text-xl lg:text-2xl p-6 rounded-lg mt-28 text-gray-700 lg:w-[50%] mx-auto font-apple tracking-[2px]'>
            <p>
              {t("actors.alexa.biography-fp")}<br /><br />
            </p>
            <p>
              {t("actors.alexa.biography-sp")}<br /><br />
            </p>
            <p>
              {t("actors.alexa.biography-tp")}<br /><br />
            </p>
            <p>
              {t("actors.alexa.biography-four")}<br /><br />
            </p>
            <p>
              {t("actors.alexa.biography-five")}<br /><br />
            </p>
            <p>
              {t("actors.alexa.biography-six")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographyAlexa;
