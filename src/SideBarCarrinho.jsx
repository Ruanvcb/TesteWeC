// src/SideBarCarrinho.jsx
import React, { useEffect } from "react";
import "./SideBarCarrinho.scss";

export default function SideBarCarrinho({ isOpen, onClose }) {
  // Único produto do carrinho
  const item = {
    id: 1,
    name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
    image: '/images/static/produtos/produto-1.png',
    price: { amount: 179.9, isDiscount: null },
    size: 34,
    quantity: 1,
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  // Cálculos para o subtotal/descontos e total;
  const subtotal = 1055.89;
  const discounts = 191.62;
  const total = subtotal - discounts;

  return (
    <div className={`sidebar-overlay ${isOpen ? "open" : ""}`}>
      <div className="sidebar-carrinho">
        <div className="header">
          <h2>Carrinho</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="items">
          <div className="item-card">
            <img src={item.image} alt={item.name} />
            <div className="info">
              <p className="name">{item.name}</p>
              <p className="size">Tamanho: {item.size}</p>
              <p className="price">R$ {item.price.amount.toFixed(2)}</p>
              {/* Na mesma div pra mexer melhro na box */}
              <div className="bottom-controls">
                <div className="qty-control">
                  <button disabled>-</button>
                  <span>{item.quantity}</span>
                  <button disabled>+</button>
                </div>
                <button className="remove" disabled>Remover</button>
              </div>
            </div>
          </div>
        </div>

        <div className="summary">
          <div className="line">
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="line">
            <span>Descontos</span>
            <span>- R$ {discounts.toFixed(2)}</span>
          </div>
          <div className="line total">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <button className="checkout">Finalizar pedido</button>
          <button className="continue" onClick={onClose}>Continuar comprando</button>
        </div>
      </div>
    </div>
  );
}