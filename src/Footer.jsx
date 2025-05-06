// src/Footer.jsx
import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/images/static/rodape/Logo.png" alt="bebecê-logo" />
      </div>

      <div className="footer-social">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h4>Sobre a empresa</h4>
          <ul>
            <li>
              <a href="/quem-somos">Quem somos</a>
            </li>
            <li>
              <a href="/fale-conosco">Fale conosco</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Políticas</h4>
          <ul>
            <li>
              <a href="/politica-de-privacidade">Política de Privacidade</a>
            </li>
            <li>
              <a href="/termos-de-uso">Termos de Uso</a>
            </li>
            <li>
              <a href="/politica-de-entrega">Política de Entrega</a>
            </li>
            <li>
              <a href="/politica-de-cupom-e-descontos">Política de Cupom e Descontos</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
