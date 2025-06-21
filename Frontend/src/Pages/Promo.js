// Importa o React e o hook useState para controle de estado
import React, { useState } from 'react';

// Array com os slides de promoção, cada objeto representa um slide
const slides = [
  {
    title: 'Desconto de 50% em eletrônicos!', // Título do slide
    description: 'Aproveite por tempo limitado.', // Descrição
    color: 'from-blue-100 to-blue-300', // Gradiente de fundo com Tailwind
    buttonText: 'Ver Ofertas', // Texto do botão
  },
  {
    title: 'Frete grátis em todo o site!',
    description: 'Só essa semana.',
    color: 'from-pink-100 to-pink-300',
    buttonText: 'Aproveitar',
  },
  {
    title: 'Compre 2, leve 3!',
    description: 'Promoção válida até domingo.',
    color: 'from-green-100 to-green-300',
    buttonText: 'Saiba Mais',
  },
];

// Componente funcional do carrossel de promoções
const PromoCarousel = () => {
  const [current, setCurrent] = useState(0); // Estado que armazena o slide atual (índice)

  // Avança para o próximo slide, com loop circular
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Volta para o slide anterior, com loop circular
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full bg-white py-10">
      {/* Título da seção */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Promoções Especiais</h2>

      {/* Container do carrossel */}
      <div className="relative max-w-4xl mx-auto">
        <div
          className={`bg-gradient-to-r ${slides[current].color} p-10 rounded-xl flex flex-col items-center justify-center h-64 transition-all duration-500`}
        >
          {/* Conteúdo do slide atual */}
          <h3 className="text-2xl font-semibold text-gray-900">{slides[current].title}</h3>
          <p className="mt-2 text-gray-700">{slides[current].description}</p>
          
          {/* Botão de ação */}
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition">
            {slides[current].buttonText}
          </button>
        </div>

        {/* Botão para voltar slide */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          ◀
        </button>

        {/* Botão para avançar slide */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          ▶
        </button>
      </div>

      {/* Indicadores (bolinhas) que mostram qual slide está ativo */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-gray-800' : 'bg-gray-400'} cursor-pointer`}
            onClick={() => setCurrent(index)} // Permite trocar o slide clicando na bolinha
          />
        ))}
      </div>
    </section>
  );
};

// Exporta o componente para uso externo
export default PromoCarousel;
