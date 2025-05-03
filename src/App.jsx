import React, { useState } from "react";
import CepBanner from "./CepBanner";
import Header from "./Header";
import CepModal from "./CepModal";

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
      {showModal && (
        <CepModal onClose={() => setShowModal(false)} onSave={handleSaveCep} />
      )}
    </>
  );
}
