import Image from 'next/image';
import thirdPhoto from '@/public/homeImgs/homeBg/artAlbine.jpg';

export const Marketing: React.FC = (): JSX.Element => {
  return (
    <section data-scroll-section>
      <article>
        <div className="relative min-h-screen w-[100%] mx-auto flex flex-col justify-center items-center border-[1px]">
          <Image
            src={thirdPhoto}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]" />

          <h1 className='text-4xl text-center text-white'>Real Inclusion: More Than a Marketing Trend</h1>
          <p className="text-lg text-center text-white mt-4">
            Inclusion must be genuine and not just a marketing strategy.
            Many brands have been criticized for exploiting diversity as a passing trend
            without making substantial changes in their practices.
            Our mission is to expose these practices and promote authentic inclusion,
            where each person is valued for their individuality.
          </p>
        </div>
      </article>
    </section>
  )
};
