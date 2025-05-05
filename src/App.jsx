import React, { useState } from "react";
import BannerSlider from "./BannerSlider";
import CepBanner from "./CepBanner";
import Header from "./Header";
import CepModal from "./CepModal";
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
    </div>
    
    {showModal && (
      <CepModal onClose={() => setShowModal(false)} onSave={handleSaveCep} />
    )}
  </>
  );
}