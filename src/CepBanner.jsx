import React from "react";
import './CepBanner.scss';

export default function CepBanner({ cidade, onEdit }) {
  return (
    <div className="cep-banner">
      <span>Você está em: {cidade || "Local não informado"}</span>
      <button onClick={onEdit}>Alterar</button>
    </div>
  );
}
