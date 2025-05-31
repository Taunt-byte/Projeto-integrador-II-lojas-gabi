import React from "react";

const CartDrawer = ({ isOpen, onClose, cartItems, onIncrease, onDecrease, onRemove }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log('onIncrease prop:', onIncrease);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-bold">Seu Carrinho</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Carrinho vazio.</p>
        ) : (
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li key={item.title} className="flex flex-col border-b pb-3">
                <div className="flex justify-between">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-sm">R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onDecrease(item.title)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >–</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onIncrease(item.title)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >+</button>
                  </div>
                  <button
                    onClick={() => onRemove(item.title)}
                    className="text-red-500 text-sm hover:underline"
                  >Remover</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between font-semibold text-gray-800">
          <span>Total:</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
