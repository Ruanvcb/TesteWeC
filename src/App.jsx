import React, { useState } from "react";
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
  const [showModal, setShowModal] = useState(true);
  const [cidade, setCidade] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProdutoModalOpen, setIsProdutoModalOpen] = useState(false);

  const [isCarrinhoOpen, setCarrinhoOpen] = useState(false);

  const openCarrinho = () => setCarrinhoOpen(true);
  const closeCarrinho = () => setCarrinhoOpen(false);

  const handleSaveCep = (data) => {
    setCidade(data.cidade);
    setShowModal(false);
  };

  //Função pra abrir a tela de produtos pro carrinho
  const handleOpenProdutoModal = (produto) => {
    setSelectedProduct(produto);
    setIsProdutoModalOpen(true);
  };
  
  const handleCloseProdutoModal = () => {
    setIsProdutoModalOpen(false);
    setSelectedProduct(null);
  };
  

  return (
  <>
    <CepBanner cidade={cidade} onEdit={() => setShowModal(true)} />
    <Header onCartClick={openCarrinho} />
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

    <Footer/>

    {isProdutoModalOpen && selectedProduct && (
      <ProdutoModal
        product={selectedProduct}
        onClose={handleCloseProdutoModal}
      />
    )}

    <SideBarCarrinho isOpen={isCarrinhoOpen} onClose={closeCarrinho} />

  </>
  );
}