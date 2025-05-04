// src/BannerSlider.jsx
import React from "react";
import Slider from "react-slick";
import "./BannerSlider.scss";

export default function BannerSlider() {
  const images = [
    "/images/static/banner/banner-principal-1.png",
    "/images/static/banner/banner-principal-2.png",
    "/images/static/banner/banner-principal-3.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
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
          </div>
        ))}
      </Slider>
    </div>
  );
}
