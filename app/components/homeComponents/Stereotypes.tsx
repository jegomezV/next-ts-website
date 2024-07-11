import Image from 'next/image';
import firstPhoto from '@/public/homeImgs/homeBg/vitiGirlOne.jpg';

export const Stereotypes: React.FC = (): JSX.Element => {
  return (
      <section data-scroll-section>
            <article>
              <div className="relative min-h-screen w-[100%] mx-auto flex flex-col justify-center items-center border-[1px]">
                <Image
                  src={firstPhoto}
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]" />

                <h1 className='text-4xl text-center text-white'>The Weight of Beauty Stereotypes</h1>
                <p className="text-lg text-center text-white mt-4">
                  Beauty stereotypes imposed by the fashion industry have had profound negative repercussions
                  on the mental and emotional health of many individuals.
                  From the pressure to achieve impossible bodies to the exclusion of those who don't fit traditional molds,
                  these stigmas have limited the potential of countless people.
                  It's time to challenge these standards and advocate for beauty that includes everyone.
                </p>
              </div>
            </article>
          </section>
  )
};
