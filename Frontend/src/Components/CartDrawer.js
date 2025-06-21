// Importa a biblioteca React, necessária para usar JSX e criar componentes
import React from "react";

// Componente funcional que representa o painel lateral do carrinho (CartDrawer)
const CartDrawer = ({
  isOpen,        // Booleano que indica se o carrinho está visível
  onClose,       // Função chamada para fechar o carrinho
  cartItems,     // Array com os itens no carrinho
  onIncrease,    // Função para aumentar a quantidade de um item
  onDecrease,    // Função para diminuir a quantidade de um item
  onRemove,      // Função para remover um item do carrinho
  onCheckout     // Função chamada ao clicar em "Finalizar compra"
}) => {

  // Calcula o valor total dos itens do carrinho
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );

  return (
    // Container do carrinho (drawer) posicionado no canto direito da tela
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full' // Aparece ou some com animação
      }`}
    >

      {/* Cabeçalho com título e botão de fechar */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-bold">Seu Carrinho</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
      </div>

      {/* Área de conteúdo com a lista de produtos */}
      <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
        {cartItems.length === 0 ? (
          // Mensagem quando o carrinho está vazio
          <p className="text-gray-600">Carrinho vazio.</p>
        ) : (
          // Lista de itens no carrinho
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li key={item.title} className="flex flex-col border-b pb-3">

                {/* Linha com nome do produto e valor total */}
                <div className="flex justify-between">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-sm">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                {/* Controles de quantidade e botão de remover */}
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onDecrease(item.title)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onIncrease(item.title)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Botão para remover o item do carrinho */}
                  <button
                    onClick={() => onRemove(item.title)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remover
                  </button>
                </div>

              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Rodapé com valor total e botão de finalizar compra */}
      <div className="p-4 border-t">
        <div className="flex justify-between font-semibold text-gray-800">
          <span>Total:</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>

        <button
          onClick={onCheckout}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          disabled={cartItems.length === 0} // Desativa se o carrinho estiver vazio
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

// Exporta o componente para ser utilizado em outras partes da aplicação
export default CartDrawer;
