import Image from 'next/image';
import thirdPhoto from '@/public/homeImgs/homeBg/shadowGirl.jpg';

export const Actors: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section>
      <article>
        <div className="relative min-h-screen w-[100%] mx-auto flex flex-col justify-center items-center border-y-[1px]">
          <Image
            src={thirdPhoto}
            alt="Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
            className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]" />
          <h1 className="
            z-10 text-2xl text-transparent duration-1000
            bg-white cursor-default
            font-display sm:text-3xl md:text-4xl xl:text-6xl
            whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]"> The Actors Section. <br />
          </h1>
        </div>
      </article>
    </section>
  )
};
