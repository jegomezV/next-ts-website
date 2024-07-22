import React from 'react';

const ModelJeffry: React.FC = (): JSX.Element => {
  return (
    <div className='max-h-[80%] max-w-[80%] mx-auto my-4 p-4'>
      <div className='text-center'>
        <h1
          data-scroll
          data-scroll-speed="-0.2"
          className="text-2xl text-transparent duration-1000 bg-black cursor-default font-display sm:text-3xl md:text-4xl xl:text-6xl whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]"
        >
          Jeffry Model
        </h1>
        {/* Descripción existente */}
        <p className='text-gray-600 my-4'>
          Descripción del modelo Jeffry. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        {/* Texto existente */}
        <p className='text-gray-600 my-4'>
          Desde el inicio de su carrera, Jeffry ha destacado por su versatilidad...
        </p>
        {/* Agregar Testimonios */}
        <section className='my-8'>
          <h2 className="text-3xl font-semibold mb-4">Testimonios</h2>
          <div className='space-y-4'>
            <blockquote className="italic text-gray-500">
              "Trabajar con Jeffry ha sido una experiencia reveladora. Su profesionalismo y dedicación son incomparables." - Diseñador de Moda Renombrado
            </blockquote>
            <blockquote className="italic text-gray-500">
              "Jeffry no solo aporta su talento frente a la cámara, sino que también trae una energía positiva y contagiosa al set." - Fotógrafo de Moda
            </blockquote>
          </div>
        </section>
        {/* Agregar FAQs */}
        <section className='my-8'>
          <h2 className="text-3xl font-semibold mb-4">Preguntas Frecuentes</h2>
          <div className='text-left space-y-2'>
            <p className="font-bold">¿Cómo comenzó Jeffry en el modelaje?</p>
            <p>Jeffry descubrió su pasión por el modelaje a una edad temprana y ha trabajado incansablemente para perfeccionar su arte desde entonces.</p>
            <p className="font-bold">¿Qué lo inspira?</p>
            <p>La constante evolución de la moda y la oportunidad de colaborar con creativos de todo el mundo son sus principales fuentes de inspiración.</p>
          </div>
        </section>
        {/* Agregar Galería de Momentos Destacados */}
        <section className='my-8'>
          <h2 className="text-3xl font-semibold mb-4">Momentos Destacados</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Ejemplo de imágenes, reemplaza src con tus propias imágenes */}
            <img src="path/to/highlight1.jpg" alt="Momento destacado 1" className='rounded-lg' />
            <img src="path/to/highlight2.jpg" alt="Momento destacado 2" className='rounded-lg' />
            <img src="path/to/highlight3.jpg" alt="Momento destacado 3" className='rounded-lg' />
            {/* Agrega más imágenes según sea necesario */}
          </div>
        </section>
        <section className='my-8'>
          <h2 className="text-3xl font-semibold mb-4">Testimonios</h2>
          <div className='space-y-4'>
            <blockquote className="italic text-gray-500">
              "Trabajar con Jeffry ha sido una experiencia reveladora. Su profesionalismo y dedicación son incomparables." - Diseñador de Moda Renombrado
            </blockquote>
            <blockquote className="italic text-gray-500">
              "Jeffry no solo aporta su talento frente a la cámara, sino que también trae una energía positiva y contagiosa al set." - Fotógrafo de Moda
            </blockquote>
          </div>
        </section>
        {/* Agregar FAQs */}
        <section className='my-8'>
          <h2 className="text-3xl font-semibold mb-4">Preguntas Frecuentes</h2>
          <div className='text-left space-y-2'>
            <p className="font-bold">¿Cómo comenzó Jeffry en el modelaje?</p>
            <p>Jeffry descubrió su pasión por el modelaje a una edad temprana y ha trabajado incansablemente para perfeccionar su arte desde entonces.</p>
            <p className="font-bold">¿Qué lo inspira?</p>
            <p>La constante evolución de la moda y la oportunidad de colaborar con creativos de todo el mundo son sus principales fuentes de inspiración.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ModelJeffry;