import Image from 'next/image';
import secondPhoto from '@/public/homeImgs/homeBg/cameraMan.jpg';

export const Introduction: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section>
      <article data-scroll data-scroll-speed="0.2">
        <div className="relative min-h-screen w-[100%] mx-auto flex flex-col justify-center items-center border-t-[1px]">
          <Image
            src={secondPhoto}
            alt="Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
            
            className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]" />

          <h1 className='text-4xl text-center text-white'>Redefining Beauty Beyond Stereotypes</h1>
          <p className="text-lg text-center text-white mt-4">
            We explore the transformation of the fashion industry and its impact on the perception of beauty.
          </p>
        </div>
      </article>
    </section>
  )
};
