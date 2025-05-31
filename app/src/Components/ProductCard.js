import React from 'react';

const ProductCard = ({ title, price, image, onAddToCart }) => (
  <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-xl"
    />
    <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600 mt-1">R$ {price.toFixed(2)}</p>
    <button
      onClick={() => onAddToCart({ title, price })}
      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
    >
      Adicionar ao Carrinho
    </button>
  </div>
);

export default ProductCard;

