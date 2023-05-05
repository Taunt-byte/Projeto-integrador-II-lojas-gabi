export default function Navbar() {
  return (
    <main>
        <div className="bg-gray-800 dark:bg-gray-900 text-slate-100">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="p-2 text-lg font-semibold">
              Lojas Gabi
            </a>
          </div>
          <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="p-2 text-slate-100 hover:text-gray-400">
                Início
              </a>
              <a href="#" className="p-2 text-slate-100 hover:text-gray-400">
                Categorias
              </a>
              <a href="#" className="p-2 text-slate-100 hover:text-gray-400">
                Carrinho
              </a>
              <a href="#" className="p-2 text-slate-100 hover:text-gray-400">
                Conta
              </a>
              </div>
          </div>
        </div>
    </main>
  );
}
