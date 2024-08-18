import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/jeffryModal/biographyPhoto.jpg';

const BiographyClaudia: React.FC = (): JSX.Element => {
  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-gray-100 overflow-x-clip mb-[30rem] md:mb-24 lg:mb-32'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
          <h2
            data-scroll
            data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mb-6"
          >
            Biography
          </h2>
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <p className='text-gray-700'>
                Con una trayectoria de 17 años, Perfil Class ha forjado su camino desde los rincones más oscuros de la discriminación hasta convertirse en un faro de inclusión y profesionalismo en el competitivo mundo de la moda. Claudia Ruiz, junto con su socia, ha labrado un espacio donde la edad, la contextura, la etnia y el género no son barreras, sino pilares de celebración. <br /><br />
              </p>
              <p className='text-gray-700'>
                Desde sus inicios como telemercaderista, Claudia ha liderado un movimiento que no solo abraza la diversidad, sino que la celebra en cada pasarela, en cada campaña y en cada clase de su academia. Es aquí, en esta academia, donde el alma de Perfil Class reside, formando modelos con un estándar de excelencia que ha llevado a la agencia a lo más alto de la industria.<br /><br />
              </p>
              <p className='text-gray-700'>
                Pero más allá de la pasarela y las luces, Perfil Class es sinónimo de cambio social. Abriendo las puertas a modelos afrodescendientes cuando otros las cerraban, la agencia no solo ha creado oportunidades, sino que ha cambiado percepciones y estereotipos arraigados en la industria. Su compromiso con la comunidad no se limita a las pasarelas, sino que se extiende a alianzas con instituciones educativas, como la Universidad San Buenaventura, en donde los y las modelos pueden acceder a cursos gratuitos para su desarrollo integral.<br /><br />
              </p>
              <p className='text-gray-700'>
                Sin embargo, el camino hacia el éxito no ha sido fácil. En un mundo donde la superficialidad a menudo eclipsa el talento, Claudia y su equipo han enfrentado desafíos que van más allá de las tendencias de la moda. La lucha contra la discriminación, la presión para conformarse a estándares irreales y la constante batalla por la inclusión han sido obstáculos que han superado con determinación.<br /><br />
              </p>
          </div>
        </div>
        </div>
        <div className='relative h-[400px] w-full'>
          <Image
            src={rightPhoto}
            alt='Claudia Biography'
            className='object-cover w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
            layout='fill'
          />
          <div className='bg-white p-6 rounded-lg shadow-md mt-[28rem]'>
            <p className='text-gray-700'>
              Las ferias de moda, ese barco lleno de sueños y realidades, han sido tanto su escenario de triunfo como su campo de batalla. En un mundo donde el color de piel sigue siendo juzgado en la pasarela, Perfil Class desafía los prejuicios y demuestra que la belleza no tiene límites ni tonos definidos.<br /><br />
              Hoy esta no solo es una agencia de modelos, sino un símbolo de cambio en la industria de la moda. Su visión de inclusión, profesionalismo y empoderamiento resuena más allá de las fronteras de Cali, inspirando a una nueva generación de modelos y líderes que buscan romper barreras y crear un mundo donde todos tienen un lugar en la pasarela de la vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographyClaudia;
