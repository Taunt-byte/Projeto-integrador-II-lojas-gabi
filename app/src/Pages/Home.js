import React, { useState, useMemo } from "react";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import CartDrawer from "../Components/CartDrawer";
import PromoCarousel from "../Pages/Promo";

const products = [
  {
    title: "Fone Bluetooth",
    price: 199.99,
    image:
      "https://lojamultilaser.vtexassets.com/arquivos/ids/1361194/9481-00.jpg?v=638718196780230000",
  },
  {
    title: "Smartwatch",
    price: 349.9,
    image: "https://http2.mlstatic.com/D_NQ_NP_728225-MLA82946614532_032025-O.webp",
  },
  {
    title: "Câmera HD",
    price: 499.9,
    image: "https://via.placeholder.com/300x200?text=Camera",
  },
  {
    title: "Teclado Mecânico",
    price: 229.9,
    image: "https://via.placeholder.com/300x200?text=Teclado",
  },
  {
    title: "Mouse Gamer",
    price: 159.9,
    image: "https://via.placeholder.com/300x200?text=Mouse",
  },
  {
    title: "Caixa de Som",
    price: 299.9,
    image: "https://via.placeholder.com/300x200?text=Caixa+de+Som",
  },
];

const shuffleArray = (arr) => [...arr].sort(() => 0.5 - Math.random());

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const randomizedProducts = useMemo(() => shuffleArray(products), []);

  // Adiciona ao carrinho, atualizando quantidade se produto já existir
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.title === product.title);
      if (itemExists) {
        // Atualiza a quantidade
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Adiciona novo item com quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleIncrease = (title) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (title) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.title === title
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item se quantidade for 0
    );
  };
  const handleCheckout = () => {
    // Simula confirmação
    alert("Compra finalizada com sucesso!");
    setCartItems([]); // Limpa o carrinho
    setCartOpen(false); // Fecha o drawer
  };
  const handleRemove = (title) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
      />
      <PromoCarousel />
      <main className="mt-8 px-6 md:px-20">
        <div>
          <h1 className="text-2xl text-center font-semibold font-sans p-8">
            Mais vendidos
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {randomizedProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </main>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default HomePage;
