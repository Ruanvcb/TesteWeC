import React from "react";
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="icon-button">
          <i className="fa-solid fa-bars"></i>
        </button>

        <button className="icon-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

        {/* Não identifiquei qual a font correta */}
      <h1 className="logo">bebecê</h1>

      <div className="header-left">
        <button className="icon-button">
          <i className="fa-regular fa-user"></i>
        </button>

        <button className="icon-button">
            <i class="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </header>
  );
}
