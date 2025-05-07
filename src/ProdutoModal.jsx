import React, { useState, useEffect } from "react";
import "./ProdutoModal.scss";

export default function ProdutoModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const tamanhos = [34, 35, 36, 37, 38, 39, 40, 42];

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleAdd = () => {
    const productWithSize = {
      ...product,
      selectedSize,
    };

    onAddToCart(productWithSize);
  };

  return (
    <div className="produto-modal-overlay">
      <div className="produto-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <img src={product.image} alt={product.name} className="produto-img" />
        <h3>{product.name}</h3>

        <div className="tamanhos">
          <p className="alinhar">
            Tamanho:{" "}
            <span style={{ color: "#8A8A8A" }}>{selectedSize || " "}</span>
          </p>

          <div className="grade">
            {tamanhos.map((tamanho) => (
              <button
                key={tamanho}
                className={`tamanho-btn ${selectedSize === tamanho ? "selected" : ""}`}
                disabled={tamanho === 42}
                onClick={() => setSelectedSize(tamanho)}
              >
                {tamanho}
              </button>
            ))}
          </div>
        </div>

        <button className="adicionar-btn" onClick={handleAdd}>
          Adicionar ao carrinho <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </div>
  );
}
