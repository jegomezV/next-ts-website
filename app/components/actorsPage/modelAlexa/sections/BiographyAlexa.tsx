import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/alexaModal/BiographyAlexa.jpg';

const BiographyAlexa: React.FC = (): JSX.Element => {
  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-gray-100 overflow-x-clip mb-[50rem] md:mb-24 lg:mb-32'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
          <h2 data-scroll data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mb-6">
            Biography
          </h2>
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-lg shadow-md text-gray-700'>
              <p>
                A los 18 años, Alexandra se adentró en el mundo del modelaje, apoyada por sus amigos, quienes en su mayoría eran diseñadores de moda y fotógrafos apenas empezando. "Yo encontré en el modelaje otra expresión artística, para mí es una manera de comunicación visual. Siempre me he considerado un lienzo, y los diseñadores son los artistas que plasman su obra en mí", comenta. Esta perspectiva única le permitió ver el modelaje no solo como una profesión, sino como una extensión de su arte, donde su cuerpo se convierte en el vehículo de las visiones creativas de otros.<br /><br />
              </p>
              <p>
                Cherry en sus primeros años enfrentó constantes críticas sobre su apariencia. "Siempre me han visto como modelo plus, con talla 8 o 10, y siempre me decían que era demasiado grande para la industria", recuerda. Además, sus tatuajes y su cabello de colores fueron puntos de conflicto. Sin embargo, Alexandra no dejó que estos obstáculos la detuvieran. "Siempre me han considerado muy buena en lo que hago, pero la problemática era mi peso o mis tatuajes. A pesar de eso, siempre di lo mejor de mí".<br /><br />
              </p>
              <p>
                Después de un año en su primera agencia, encontró un mejor encaje en una segunda agencia, donde permaneció durante casi seis años. Allí, recibió formación en pasarela y expresión corporal, aprovechando cada oportunidad para mejorar. Sin embargo, aún sentía la presión de ser una modelo curvy en una industria que valoraba la delgadez extrema. "Era confuso porque mis tallas eran medianas, pero para la industria seguía siendo demasiado grande".<br /><br />
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-[350px] w-full'>
          <Image
            src={rightPhoto}
            alt='Alexa Biography'
            className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
            layout='fill'
            objectFit='cover'
          />
          <div className='bg-white p-6 rounded-lg shadow-md text-gray-700 mt-[24rem]'>
            <p>
              Actualmente, Alexandra está en una agencia donde se siente más aceptada y valorada. La agencia ha sabido destacar sus fortalezas y proponer trabajos donde su perfil único es apreciado. "Es importante que las personas con las que trabajes crean en lo que haces. Eso hace toda la diferencia" menciona.
            </p>
            <p>
              A los 34 años, Alexandra Jordan sigue desafiando las normas de la industria de la moda, abriendo caminos para futuras generaciones de modelos. "La inclusión no es un favor, es un derecho. La diversidad no es una elección". Su historia es un testimonio de resiliencia y pasión, un recordatorio de que, en la moda como en el arte, la verdadera belleza reside en la diferencia y la autenticidad.
            </p>
            <p>
              A pesar de los avances, es consciente de que la industria de la moda aún tiene un largo camino por recorrer en términos de inclusión. "Todavía se siguen teniendo muchas manifestaciones de odio. Hay homofobia, gordofobia y misoginia", afirma, pero en cada paso que da sobre la pasarela, ella comunica más que moda; brinda un mensaje de aceptación y empoderamiento, convirtiendo su carrera en una obra de arte viviente que inspira a otros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographyAlexa;
