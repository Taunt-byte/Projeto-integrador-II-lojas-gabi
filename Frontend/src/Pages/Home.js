// Importa bibliotecas necessárias
import axios from "axios";
import React, { useState, useMemo , useEffect } from "react";

// Importa componentes reutilizáveis do projeto
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import CartDrawer from "../Components/CartDrawer";
import PromoCarousel from "../Pages/Promo";

// Função auxiliar para embaralhar um array (usado para randomizar os produtos exibidos)
const shuffleArray = (arr) => [...arr].sort(() => 0.5 - Math.random());

// Componente principal da página inicial
const HomePage = () => {
  // Estados utilizados
  const [products, setProducts] = useState([]);         // Armazena os produtos vindos da API
  const [error, setError] = useState(null);             // Armazena mensagens de erro, se houver
  const [cartItems, setCartItems] = useState([]);       // Armazena os itens do carrinho
  const [cartOpen, setCartOpen] = useState(false);      // Controla a abertura do carrinho
  const API_BASE_URL = "http://localhost:3001";         // URL base da API (pode ser extraída para .env)

  // useEffect é executado ao montar o componente para buscar os produtos da API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/products`);
        setProducts(data); // Atualiza estado com os produtos recebidos
      } catch (error) {
        const msg = "falha ao carregar produtos"; // Mensagem genérica de erro
        setError(msg);
      }
    };
    fetchProducts(); // Executa a função de busca
  }, []);

  // Memoriza os produtos embaralhados para evitar reprocessamento desnecessário
  const randomizedProducts = useMemo(() => shuffleArray(products), [products]);

  // Função para adicionar produto ao carrinho
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.title === product.title);
      if (itemExists) {
        // Se o item já existe, apenas incrementa a quantidade
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Se é novo, adiciona ao array com quantity = 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Aumenta a quantidade de um item do carrinho
  const handleIncrease = (title) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Diminui a quantidade de um item; se for 0, remove
  const handleDecrease = (title) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item se a quantidade for 0
    );
  };

  // Remove um item específico do carrinho
  const handleRemove = (title) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  // Simula a finalização da compra
  const handleCheckout = () => {
    alert("Compra finalizada com sucesso!"); // Mostra confirmação
    setCartItems([]);                        // Limpa o carrinho
    setCartOpen(false);                      // Fecha o carrinho (drawer)
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Barra de navegação no topo */}
      <Navbar
        cartCount={cartItems.length}              // Número de itens no carrinho
        onCartClick={() => setCartOpen(true)}     // Abre o carrinho ao clicar no ícone
      />

      {/* Carrossel de promoções */}
      <PromoCarousel />

      {/* Área principal da página com os produtos */}
      <main className="mt-8 px-6 md:px-20">
        <div>
          <h1 className="text-2xl text-center font-semibold font-sans p-8">
            Mais vendidos
          </h1>
        </div>

        {/* Grade com os produtos renderizados dinamicamente */}
        <div className="grid md:grid-cols-3 gap-6">
          {randomizedProducts.map((product, index) => (
            <ProductCard
              key={product.id}                  // Chave única para cada item
              title={product.title}             // Título do produto
              price={product.price}             // Preço
              image={product.imageUrl}          // URL da imagem
              onAddToCart={() => handleAddToCart(product)} // Ao clicar em comprar
            />
          ))}
        </div>
      </main>

      {/* Drawer lateral do carrinho, aparece com detalhes e ações */}
      <CartDrawer
        isOpen={cartOpen}               // Se o carrinho está aberto
        onClose={() => setCartOpen(false)} // Função para fechar
        cartItems={cartItems}          // Lista de itens no carrinho
        onIncrease={handleIncrease}    // Função para +1 item
        onDecrease={handleDecrease}    // Função para -1 item
        onRemove={handleRemove}        // Função para remover item
        onCheckout={handleCheckout}    // Finaliza a compra
      />
    </div>
  );
};

// Exporta o componente para uso em outras partes da aplicação
export default HomePage;
