import React, { useEffect, useState } from "react";
import './Header.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <button className="icon-button">
          <i className="fa fa-bars"></i>
        </button>

        <button className="icon-button">
          <i className="fa fa-magnifying-glass"></i>
        </button>
      </div>

      {/* Demorei pra perceber que eram fotos no logo e não fonts do Google, muito bobo */}
      <img
        src={`/images/static/rodape/${isScrolled ? 'MiniLogoPreta.png' : 'MiniLogo.png'}`}
        alt="Mini Logo"
        className="logo"
      />

      <div className="header-left">
        <button className="icon-button">
          <i className="fa-regular fa-user"></i>
        </button>

        <button className="icon-button">
          <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </header>
  );
}
