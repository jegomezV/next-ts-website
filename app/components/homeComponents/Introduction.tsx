import Image from 'next/image';
import secondPhoto from '@/public/homeImgs/homeBg/cameraMan.jpg';

export const Introduction: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section>
      <article>
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
          <h1 data-scroll data-scroll-speed="-0.2" className="
                      z-10 text-2xl text-transparent duration-1000
                      bg-white cursor-default
                      animate-title font-display sm:text-3xl md:text-4xl xl:text-6xl
                      whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]"> Redefining Beauty Beyond Stereotypes <br />
          </h1>
          <p data-scroll data-scroll-speed="1" className="text-lg text-center text-white mt-4 drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">
            We explore the transformation of the fashion industry and its impact on the perception of beauty.
          </p>
        </div>
      </article>
    </section>
  )
};
