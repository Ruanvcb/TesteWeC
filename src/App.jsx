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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [showModal, setShowModal] = useState(true);
  const [cidade, setCidade] = useState("");

  const handleSaveCep = (data) => {
    setCidade(data.cidade);
    setShowModal(false);
  };

  return (
  <>
    <CepBanner cidade={cidade} onEdit={() => setShowModal(true)} />
    <Header />
    <div className="main-content">
      <BannerSlider />
      <CategoriaSlider />
      <ProdutoSlider />
      <AnuncioSlider />
      <CupomCadastro />
    </div>
    
    {showModal && (
      <CepModal onClose={() => setShowModal(false)} onSave={handleSaveCep} />
    )}

    <Footer/>
  </>
  );
}