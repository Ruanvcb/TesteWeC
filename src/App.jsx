import React, { useState, useEffect } from "react";
import BannerSlider from "./BannerSlider";
import CategoriaSlider from "./CategoriaSlider";
import ProdutoSlider from "./ProdutoSlider";
import AnuncioSlider from "./AnuncioSlider";
import CupomCadastro from "./CupomCadastro";
import CepBanner from "./CepBanner";
import Header from "./Header";
import CepModal from "./CepModal";
import Footer from "./Footer";
import ProdutoModal from "./ProdutoModal";
import SideBarCarrinho from "./SideBarCarrinho";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  //Não tenho ctz se isso ta funcionando corretamente;
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    const cidadeSalva = localStorage.getItem("cidade");
    const cepPreenchido = localStorage.getItem("cepPreenchido");
  
    if (cidadeSalva) {
      setCidade(cidadeSalva);
    }
  
    if (cepPreenchido === "true") {
      setShowModal(false);
    }
  }, []);
  

  const [cidade, setCidade] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProdutoModalOpen, setIsProdutoModalOpen] = useState(false);
  const [isCarrinhoOpen, setCarrinhoOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCarrinho = () => setCarrinhoOpen(true);
  const closeCarrinho = () => setCarrinhoOpen(false);

  //Isso é o lance do LocalStorage pra salvar as infos;
  const handleSaveCep = (data) => {
    setCidade(data.cidade);
    localStorage.setItem("cidade", data.cidade);
    localStorage.setItem("cepPreenchido", "true");
    setShowModal(false);
  };

  const handleOpenProdutoModal = (produto) => {
    setSelectedProduct(produto);
    setIsProdutoModalOpen(true);
  };

  const handleCloseProdutoModal = () => {
    setIsProdutoModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex(
        (item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
      );

      if (index !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[index].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setCarrinhoOpen(true);
    handleCloseProdutoModal();
  };

  // Soma a qtdade no carrinho
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <CepBanner cidade={cidade} onEdit={() => setShowModal(true)} />
      <Header onCartClick={openCarrinho} cartCount={totalItems} />

      <div className="main-content">
        <BannerSlider />
        <CategoriaSlider />
        <ProdutoSlider onAddToCart={handleOpenProdutoModal} />
        <AnuncioSlider />
        <CupomCadastro />
      </div>

      {showModal && (
        <CepModal onClose={() => setShowModal(false)} onSave={handleSaveCep} />
      )}

      {isProdutoModalOpen && selectedProduct && (
        <ProdutoModal
          product={selectedProduct}
          onClose={handleCloseProdutoModal}
          onAddToCart={handleAddToCart}
        />
      )}

      <SideBarCarrinho
        isOpen={isCarrinhoOpen}
        onClose={closeCarrinho}
        items={cartItems}
      />

      <Footer />
    </>
  );
}