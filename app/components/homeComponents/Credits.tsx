import Image from 'next/image';
import firstPhoto from '@/public/homeImgs/homeBg/blurHead.jpg';

export const Credits: React.FC = (): JSX.Element => {
  return (
    <section id='credits'>
          <article>
            <div className="relative min-h-screen w-[100%] mx-auto flex flex-col justify-center items-center border-t-[1px] border-black">
              <Image
                src={firstPhoto}
                alt="Background"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]" />

          <h1 className="
                      z-10 text-2xl duration-1000
                      bg-black cursor-default
                      font-display sm:text-3xl md:text-4xl xl:text-6xl
                      whitespace-nowrap bg-clip-text drop-shadow-[0_0.1px_0.8px_rgba(0,0,0,0.8)"> Credits <br />
          </h1>
              <p className="text-lg text-center text-black mt-4 font-display">
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
