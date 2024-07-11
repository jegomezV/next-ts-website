import Image from 'next/image';

import modelPhoto from '@/public/homeImgs/homeBg/modelsSection/alexaMainPhoto.jpg';
import modelPhoto2 from '@/public/homeImgs/homeBg/modelsSection/diegoMainPhoto.jpg';
import modelPhoto3 from '@/public/homeImgs/homeBg/modelsSection/jeffryMainPhoto.jpg';
import modelPhoto4 from '@/public/homeImgs/homeBg/modelsSection/saraliMainPhoto.jpeg';
import modelPhoto5 from '@/public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto1.jpg';
import modelPhoto6 from '@/public/homeImgs/homeBg/modelsSection/zorrogrisMainPhoto2.jpg';

const modelPhotos = [modelPhoto, modelPhoto2, modelPhoto3, modelPhoto4, modelPhoto5, modelPhoto6];

export const ModelsSection: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section>
      <article>
        <div className="w-full flex overflow-x-scroll h-screen items-center relative">
          <div className='absolute left-[7rem] top-[2rem]'>
            <h1 className='text-white text-4xl'>Models</h1>
          </div>
          {modelPhotos.map((photo, index) => (
            <div
              key={index}
              className="min-w-[35%] h-[75%] flex justify-center items-center bg-white mx-4"
            >
              <Image
                src={photo}
                alt={`Model ${index + 1}`}
                objectFit="cover"
                className='h-full w-full'
              />
            </div>
          ))}
        </div>
      </article>
    </section>
  )
};
