import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Sua Loja. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline hover:text-gray-800 transition">Política de Privacidade</a>
          <a href="#" className="hover:underline hover:text-gray-800 transition">Termos de Uso</a>
          <a href="#" className="hover:underline hover:text-gray-800 transition">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
