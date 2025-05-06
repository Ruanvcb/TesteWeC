// src/CupomCadastro.jsx
import React, { useState } from "react";
import "./CupomCadastro.scss";

export default function CupomCadastro() {
  const [copiado, setCopiado] = useState(false);
  const [emailEnviado, setEmailEnviado] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("BEMVINDA");
    setCopiado(true);
  };

  const handleEnviar = () => {
    setEmailEnviado(true);
  };

  return (
    <div className="cupom-cadastro">
      <h3 className={emailEnviado ? "finalizado" : ""}>
        {emailEnviado
          ? "Utilize o cupom abaixo e garanta seu desconto!"
          : (
              <>
                Cadastre-se e receba <b>10% OFF</b> na sua primeira compra!
              </>
            )}
      </h3>

      {!emailEnviado ? (
        <div className="form-email">
          <input type="email" placeholder="Digite seu e-mail" />
          <button onClick={handleEnviar}>ENVIAR</button>
        </div>
      ) : (
        <div className="cupom">
          <div className="codigo">BEMVINDA</div>
          <button className="copiar-btn" onClick={handleCopy}>{copiado ? "Copiado" : "Copiar"}</button>
        </div>
      )}
    </div>
  );
}
