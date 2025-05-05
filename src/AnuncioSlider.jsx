// src/AnuncioSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AnuncioSlider.scss";

//Usei como base o que foi feito no "utils.js" para passar os textos, achei que seria mais fácil assim:
const anuncios = [
  {
    image: "/images/static/anuncios/anuncio-1.png",
    titulo: "NOVO LOGO, MESMA ESSÊNCIA.",
    texto:
      "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!",
  },
  {
    image: "/images/static/anuncios/anuncio-2.png",
    titulo: "É AMANHÃ",
    texto:
      "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebebcê ❤️",
      //os emojis só copiei dos emojis do whats
  },
  {
    image: "/images/static/anuncios/anuncio-3.png",
    titulo: "DESCUBRA O GLAMOUR EM CADA PASSO",
    texto:
      "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para voce.✨",
  },
];

export default function AnuncioSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1, //mesma coisa do cat slide,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="anuncio-slider">
      <h2 className="anuncio-titulo">Conheça mais</h2>
      <p className="anuncio-sub">Fique por dentro de tudo que acontece na Bebecê.</p>
      <Slider {...settings}>
        {anuncios.map((item, index) => (
          <div className="anuncio-card" key={index}>
            <img src={item.image} alt={item.titulo} className="anuncio-img" />
            <div className="anuncio-conteudo">
              <h3 className="anuncio-card-title">{item.titulo}</h3>
              <p className="anuncio-texto">{item.texto}</p>
              <a className="anuncio-link"><u>Saiba mais!</u></a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
