// src/SideBar.jsx
import React, { useState, useEffect } from "react";
import "./SideBar.scss";

export default function SideBar({ isOpen, onClose }) {
  const [sapatosOpen, setSapatosOpen] = useState(true);

  useEffect(() => {
    //Isso impede a rolagem da tela ao mexer no mouse
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup para evitar acúmulo
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  const toggleSapatos = () => {
    setSapatosOpen(!sapatosOpen);
  };

  return (
    <div className={`sidebar-overlay ${isOpen ? "open" : ""}`}>
      <div className="sidebar">
        {/* Header com o logo e botão de fechar */}
        <div className="sidebar-header">
          <img src="/images/static/rodape/MiniLogoPreta.png" />
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        {/* Não me orgulho disso / Mas cortei a imagem e adionei assim pq eu não consegui fazer com a imagem completa */}
        <div className="sidebar-banner">
          <img src="/images/static/rodape/gambiarra-principal.png" alt="Banner" />
          <div className="banner-text">
            <span className="left-text">Celebration - 20 Anos</span>
            <a href="#" className="right-link">Conheça</a>
          </div>
        </div>

        {/* Menu da sidebar */}
        <nav className="sidebar-menu">
          <p>Liquida</p>

          <div className="menu-group">
            <p className="expandable" onClick={toggleSapatos}>
              Sapatos
              <span className="arrow">{sapatosOpen ? "⌄" : "›"}</span>
            </p>
            {sapatosOpen && (
              <ul>
                <li>Scarpins</li>
                <li>Mocassim</li>
                <li>Sapatilhas</li>
                <li>Mules</li>
                <li>Peep Toe</li>
                <li>Oxford</li>
              </ul>
            )}
          </div>

          <p className="arrowed">Sandálias</p>
          <p className="arrowed">Botas</p>
          <p className="arrowed">Tênis</p>
          <p className="outlet">Outlet</p>
        </nav>
      </div>
    </div>
  );
}