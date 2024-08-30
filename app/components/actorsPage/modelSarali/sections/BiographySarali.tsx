import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const BiographySarali: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation("global");
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-slate-200 overflow-x-clip mb-[5rem] md:mb-24 lg:mb-0'>
      <div className='max-w-7xl mx-auto flex flex-col gap-8'>
        <div className='relative flex justify-center'>
          <div className='absolute bg-black/40 backdrop-blur-xl rounded-2xl top-0 flex justify-center w-[60%]'>
            <h2 data-scroll data-scroll-speed="-0.2"
              className="text-2xl md:text-3xl lg:text-6xl py-3 px-6 rounded-2xl font-display bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-white">
              {t("actors.sarali.titleB")}
            </h2>
          </div>
          <div className='text-xl lg:text-3xl p-6 rounded-lg mt-28 text-gray-700 lg:w-[50%] mx-auto font-apple tracking-[2px]'>
            <p>
              {t("actors.sarali.biography-fp")}<br /><br />
            </p>
            {showFullText && (
              <>
                <p>
                  {t("actors.sarali.biography-sp")}<br /><br />
                </p>
                <p>
                  {t("actors.sarali.biography-tp")}<br /><br />
                </p>
                <p>
                  {t("actors.sarali.biography-four")}<br /><br />
                </p>
                <p>
                  {t("actors.sarali.biography-five")}<br /><br />
                </p>
              </>
            )}
            <button
              onClick={handleToggleText}
              className="mt-4 text-blue-500 hover:underline"
            >
              {showFullText ? t("showLess") : t("showMore")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySarali;
