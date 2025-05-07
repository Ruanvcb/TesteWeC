import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import "./Header.scss";


export default function Header({ onCartClick, cartCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-left">
          <button className="icon-button" onClick={() => setMenuOpen(true)}>
            <i className="fa fa-bars"></i>
          </button>

          <button className="icon-button">
            <i className="fa fa-magnifying-glass"></i>
          </button>
        </div>

        <img
          src={`/images/static/rodape/${isScrolled ? "MiniLogoPreta.png" : "MiniLogo.png"}`}
          alt="Mini Logo"
          className="logo"
        />

        <div className="header-right">
          <button className="icon-button">
            <i className="fa-regular fa-user"></i>
          </button>

          <button className="icon-button" onClick={onCartClick}>
            <i className="fa fa-bag-shopping"></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </header>

      <SideBar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
