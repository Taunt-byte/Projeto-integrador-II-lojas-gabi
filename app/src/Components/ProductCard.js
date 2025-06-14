import React from 'react';

const ProductCard = ({ title, price, image, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
      <div className="w-full h-48 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain mx-auto"
        />
      </div>
      <h2 className="text-lg font-semibold mt-4">{title}</h2>
      <p className="text-gray-700 mb-4">R$ {price.toFixed(2)}</p>
      <button
        onClick={onAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};


export default ProductCard;

