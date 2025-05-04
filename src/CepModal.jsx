import React, { useState } from "react";
import './CepModal.scss';

export default function CepModal({ onClose, onSave }) {
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSave = () => {
    onSave({ cidade });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="cep-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Personalize sua experiência e encontre produtos perto de você!</h2>

        <label>Código postal*</label>
        
        <input
          type="text"
          placeholder="00000-000"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <div className="optional-fields">
          <div className="field-group">
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              type="text"
              placeholder="Opcional"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="field-group">
            <label htmlFor="estado">Estado</label>
            <select
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="">Opcional</option>
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              <option value="RS">RS</option>
              {/* etc... */}
            </select>
          </div>
        </div>


        <div className="optional-fields">

        </div>

        <button className="save-button" onClick={handleSave}>Salvar endereço</button>
      </div>
    </div>
  );
}
