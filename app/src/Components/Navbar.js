import React from "react";

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-gray-800 text-slate-100 px-6">
      <div className="flex items-center justify-between h-16">
        <a href="#home" className="text-lg font-semibold">
          Lojas Gabi
        </a>

        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-gray-400">Início</a>
          <a href="#" className="hover:text-gray-400">Categorias</a>
          <button onClick={onCartClick} className="relative hover:text-gray-400">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <a href="#" className="hover:text-gray-400">Conta</a>
        </div>
      </div>
    </nav>
  );
}
