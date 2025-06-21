// Importa o React, necessário para usar JSX e criar componentes funcionais
import React from 'react';

// Componente funcional chamado 'Cart' que recebe 'cartItems' como prop
const Cart = ({ cartItems }) => {
  // Calcula o valor total do carrinho somando o preço vezes a quantidade de cada item
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Retorna a estrutura visual do componente (JSX)
  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      {/* Título do carrinho */}
      <h2 className="text-xl font-bold mb-4">Carrinho de Compras</h2>

      {/* Verifica se o carrinho está vazio */}
      {cartItems.length === 0 ? (
        // Caso esteja vazio, exibe uma mensagem informativa
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        // Caso haja itens, renderiza uma lista com os produtos
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            // Cada item é exibido com seu nome, quantidade e valor total
            <li key={index} className="flex justify-between text-gray-800">
              <span>{item.title} (x{item.quantity})</span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Exibe o valor total da compra, com duas casas decimais */}
      <div className="mt-4 text-right font-semibold text-gray-800">
        Total: R$ {total.toFixed(2)}
      </div>
    </div>
  );
};

// Exporta o componente para que ele possa ser usado em outros arquivos
export default Cart;
