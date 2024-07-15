import Image from 'next/image';
import thirdPhoto from '@/public/homeImgs/homeBg/shadowGirl.jpg';

export const Actors: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section>
      {/* Main container with background image */}
      <article>
        <div className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center border-y border-gray-300">
          {/* Background Image */}
          <Image
            src={thirdPhoto}
            alt="A shadowed figure against a vibrant background, evoking a sense of mystery and allure."
            layout="fill" // Ensures the image covers the entire area
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          />
          {/* Section Title */}
          <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-md">
            The Actors Section.<br />
          </h1>
        </div>
      </article>
    </section>
  );
};
