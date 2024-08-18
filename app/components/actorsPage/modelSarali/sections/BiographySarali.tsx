import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/saraliModal/SaraliBiography.jpeg';

const BiographySarali: React.FC = (): JSX.Element => {
  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-gray-100 overflow-x-clip mb-[28rem] md:mb-24 lg:mb-32'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
          <h2 data-scroll data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mb-6">
            Biography
          </h2>
          <div className='space-y-6'>
            <div className='bg-white p-6 rounded-lg shadow-md text-gray-700'>
              <p>
              Nacida en los pliegues de Cali, encontró la semilla de su pasión durante el encierro forzoso en el año 2020 a raíz de la pandemia. En medio de la introspección que trajo consigo el confinamiento, Saralí avivó el fuego de su sueño con el apoyo de su familia. Decidió traspasar los umbrales del modelaje como una forma de expresión personal, desafiando así las imposiciones de una sociedad a la que le gusta dictar lo que es bello y lo que no.<br /><br />
              </p>
              <p>
              El viaje hacia su autenticidad ha sido una travesía impregnada de autoconocimiento y el rechazo de los estándares opresivos. Desde temprana edad, desafió los prejuicios arraigados sobre lo que significa ser una mujer negra y de tallas grandes en la industria de la moda. Cada paso en la pasarela se convierte en una declaración de guerra contra los estereotipos, mientras celebra la belleza en su más amplio espectro.<br /><br />
              </p>
              <p>
              A través de las luces de las pasarelas y el agobiante mundo de las redes sociales, Saralí emplea su voz como un eco de diversidad en un mundo que a menudo tiende a la uniformidad. Su participación en eventos de moda de renombre, como el Bogotá Fashion Week y Colombiamoda, la ha catapultado como una figura influyente en el universo de la moda.
              </p>
            </div>
          </div>
        </div>
        <div className='relative h-[350px] w-full'>
          <Image
            src={rightPhoto}
            alt='Sarali Biography'
            className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
            layout='fill'
            objectFit='cover'
          />
          <div className='bg-white p-6 rounded-lg shadow-md text-gray-700 mt-[24rem]'>
            <p>
            En cada publicación, comparte fragmentos de su travesía de autoafirmación y empoderamiento, alentando a otros a abrazar su singularidad y desafiar los moldes impuestos por la sociedad. Con cada paso, redefine los cánones de belleza y fomenta una cultura de aceptación.<br /><br /> Su compromiso con la autenticidad y la diversidad la convierte en un faro de esperanza para aquellos que buscan encontrar su voz en un mundo que a menudo les silencia. En cada desfile, en cada pose, esta modelo está transformando el juego y allanando el camino hacia una industria de la moda más inclusiva y diversa. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySarali;
