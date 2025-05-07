import React from "react";
import Slider from "react-slick";
import "./CategoriaSlider.scss";

export default function CategoriaSlider() {
    const categoria = [
        { src: "/images/static/sapatos/botas.png", label: "Botas" },
        { src: "/images/static/sapatos/scarpins.png", label: "Scarpins" },
        { src: "/images/static/sapatos/sapatilhas.png", label: "Sapatilhas" },
        { src: "/images/static/sapatos/sandalias.png", label: "Sandálias" },
    ];

    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 2.5, // Aproxima mais as imagens entre si.
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true
    };

    return (
        <div className="categoria-slider">
            <h2 className="title">Categorias</h2>
            <Slider {...settings}>
                {categoria.map(({ src, label }, idx) => (
                    <div key={idx} className="cat-slide">
                        <img src={src} alt={label} />
                        <span className="caption">{label}</span>
                    </div>
                ))}
            </Slider>

            <div className="mini-banners">
                <img src="/images/static/miniBanners/banner-pequeno.png" alt="Banner pequeno" className="mini" />
                <img src="/images/static/miniBanners/banner-grande.png" alt="Banner grande" className="grande" />
            </div>
            
        </div>
    );
}
