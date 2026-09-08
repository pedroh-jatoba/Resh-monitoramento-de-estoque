import React, { useState } from "react";
import type { Item } from "../types";

// Dizemos que esse componente precisa receber uma função do App para salvar o item
interface CadastroProps {
  aoSalvar: (novoItem: Item) => void;
}

export default function Cadastro({ aoSalvar }: CadastroProps) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [numeroPatrimonio, setNumeroPatrimonio] = useState("");
  const [estadoConservacao, setEstadoConservacao] = useState("Bom");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idFinal =
      numeroPatrimonio.trim() !== ""
        ? numeroPatrimonio
        : `ID-INT-${Date.now()}`;
    const novoItem: Item = {
      idUnico: idFinal,
      nome,
      descricao,
      numeroPatrimonio,
      estadoConservacao,
    };

    aoSalvar(novoItem); // Envia o item montado de volta para o App.tsx

    // Limpa a tela
    setNome("");
    setDescricao("");
    setNumeroPatrimonio("");
    setEstadoConservacao("Bom");
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <h2>Cadastro de Item - UFAL</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <div>
          <label>
            <strong>Nome do Item:</strong>
          </label>
          <input
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label>
            <strong>Descrição:</strong>
          </label>
          <textarea
            required
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label>
            <strong>Nº de Patrimônio (Deixe em branco para gerar ID):</strong>
          </label>
          <input
            value={numeroPatrimonio}
            onChange={(e) => setNumeroPatrimonio(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label>
            <strong>Estado de Conservação:</strong>
          </label>
          <select
            value={estadoConservacao}
            onChange={(e) => setEstadoConservacao(e.target.value)}
            style={inputStyle}
          >
            <option value="Novo">Novo</option>
            <option value="Bom">Bom</option>
            <option value="Regular">Regular</option>
            <option value="Ruim">Ruim</option>
            <option value="Péssimo">Pessimo</option>
            <option value="Perda Total">Perda Total</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#0056b3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Salvar Item
        </button>
      </form>
    </div>
  );
}
