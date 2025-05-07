// src/BannerSlider.jsx
import React from "react";
import Slider from "react-slick";
import "./BannerSlider.scss";

export default function BannerSlider() {

  const images = [
    //ordem ta assim pq a segunda imagem nao tem botão
    //no return fica certo
    "/images/static/banner/banner-principal-1.png",
    "/images/static/banner/banner-principal-3.png",
    "/images/static/banner/banner-principal-2.png",
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={`Banner ${index + 1}`} />

            {src.includes("banner-principal-1.png") && (
              <button className="conheca-btn">
                <u>Conheça agora!</u>
              </button>
            )}

            {src.includes("banner-principal-2.png") && (
              <button className="ver-colecao-btn">
                <u>Ver coleção completa</u>
              </button>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}