import React from 'react';
import Image from 'next/image';

import rightPhoto from '@/public/homeImgs/actorsModals/zorroModal/ZorroBiography.jpg';

const BiographyZorro: React.FC = (): JSX.Element => {
  return (
    <section className='relative w-full py-16 px-4 md:py-24 lg:py-32 bg-gray-100 overflow-x-clip mb-[27rem] md:mb-24 lg:mb-32'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
          <h2 
            data-scroll 
            data-scroll-speed="-0.2"
            className="text-2xl md:text-3xl lg:text-5xl font-display bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 mb-6"
          >
            Biography
          </h2>
          <p className='text-gray-700 mb-6'>
            "Nosotros iniciamos en el mercado femenino, pero con el paso de los años empezamos a percibir que nuestras siluetas también daban cierta acogida en el mercado masculino", comenta Liza. Este descubrimiento fue el catalizador para que la diseñadora explorara el ámbito de las prendas unisex. Su formación en artes la llevó a cuestionar los roles de género y cómo estos se manifiestan a través de la moda. "La ropa nos define y también puede dibujar la definición forzada desde lo político y lo social", reflexiona. La inclusión no es solo una palabra de moda para Zorro Gris. Liza destaca la importancia de representar a todos, rompiendo los cánones establecidos por la industria. La marca no solo aboga por la diversidad en las prendas, sino también en las personas que las modelan.
          </p>
          <p className='text-gray-700 mb-6'>
            El tránsito de Zorro Gris no ha sido fácil. Al principio, la marca se distribuía en tiendas multimarcas de Cali y Bogotá. Sin embargo, con el tiempo, Liza sintió que estas tiendas no resonaban con la nueva dirección de la marca. "No sentíamos ya tanta afinidad con las multimarcas y empezamos a pensar en un canal propio que sería el digital", explica. Esta transición al comercio digital les ha permitido manejar ediciones limitadas, contribuyendo a la sostenibilidad que para su marca es un hito realmente importante.
          </p>
          <p className='text-gray-700'>
            La presencia de Zorro Gris en ferias nacionales como Colombiamoda y Bogotá Fashion Week ha sido un punto de inflexión. En 2022, participaron en el proyecto "Mujeres cambiando la moda" del Banco de Bogotá, una experiencia que Liza describe como reveladora. "Fue gratificante ver cómo se abría el diálogo de la inclusión de manera real". Sin embargo, señala que la industria todavía enfrenta desafíos significativos ya que las agencias manejan perfiles muy estandarizados y establecen una cuota de inclusión que termina siendo demasiado pequeña como para representar la diversidad.
          </p>
        </div>
        <div className='relative h-[400px] w-full'>
          <Image 
            src={rightPhoto} 
            alt='Zorro Biography' 
            className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-200'
            layout='fill'
            objectFit='cover'
          />
          <div className='p-6 rounded-lg shadow-md text-gray-700 mt-[24rem]'>
          <p className='text-gray-700 bg-white p-6 rounded-lg shadow-md mt-6'>
            Liza Ardila está convencida de que la inclusión y la diversidad no son solo tendencias, sino el futuro de la moda. "Hay que resistir en el discurso hasta que se nos vuelva paisaje", afirma. Con su visión y determinación, Zorro Gris sigue abriendo caminos, demostrando que la moda puede ser un reflejo de la diversidad humana en todas sus formas. En un mundo donde las estéticas tradicionales dominan, Zorro Gris nos recuerda que en la diferencia reside la verdadera riqueza de la humanidad.
          </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default BiographyZorro;
