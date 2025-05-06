// src/ProdutoSlider.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getProducts } from "./utils";
import "./ProdutoSlider.scss";
import ProdutoModal from "./ProdutoModal";

export default function ProdutoSlider({ onAddToCart }) {
  const [produtos, setProdutos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProducts().then(setProdutos);
  }, []);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 1.5, //mesma coisa do cat slide,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="produto-slider">
      <h2 className="title">Lançamentos</h2>
      <Slider {...settings}>
        {produtos.map(({ id, name, image, price }) => (
          <div className="produto-card" key={id}>
            <div className="img-container">
              <img src={image} alt={name} />
              <i
              className={`fa-heart heart-icon ${
                  favoritos.includes(id) ? "fas" : "far"
              }`}
              onClick={() => toggleFavorito(id)}
              >
              </i>

              <i
                className="fa-solid fa-bag-shopping"
                onClick={() => onAddToCart({ id, name, image, price })}
              />

              {image.includes("produto-2.png") && (
                  <span className="desconto-label">10% OFF</span>
              )}
            </div>

            {selectedProduct && (
              <ProdutoModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
              />
            )}

            {/* Demorei um pouco pra conseguir fazer funcionar */}

            <h3 className="produto-nome">{name}</h3>
            <p className="produto-preco"> 
              {price.isDiscount ? (
                <>
                  <span className="preco-antigo">R$ {price.amount.toFixed(2)}</span>
                  <span className="preco-novo">R$ {price.isDiscount.toFixed(2)}</span>
                </>
              ) : (
                <span className="preco-novo">R$ {price.amount.toFixed(2)}</span>
              )}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
