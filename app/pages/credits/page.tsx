"use client"
import { Nav } from '@/app/components/general/Nav';
import { ButtonStart } from '@/app/components/buttons/ButtonStart';

export default function CreditsPage() {
    return (
          <div className="h-full w-screen">
            <Nav />
            <ButtonStart />
    
            <main className="relative h-full w-screen">
                  <section className='relative w-full mx-auto rounded-full grid grid-cols-1 gap-3'>
                    <article className='flex mx-auto w-full justify-center text-center items-center flex-wrap m-4'>
                    </article>
                  </section>
    
              <section>
                <article>
                  <div className="h-96 w-[80%] mx-auto flex justify-center items-center border-[1px]">
                    <h1 className='text-4xl text-center text-white'>This is the second section</h1>
                  </div>
                </article>
              </section>
    
              <section>
                <article>
                  <div className="h-96 w-[80%] mx-auto flex justify-center items-center border-[1px]">
                    <h1 className='text-4xl text-center text-white'>This is the third section</h1>
                  </div>
                </article>
              </section>
    
            </main>
          </div>
      );
}
