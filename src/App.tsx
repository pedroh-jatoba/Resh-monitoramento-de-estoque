import { useState } from "react";
import type { Item } from "./types";
import Cadastro from "./components/Cadastro";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [telaAtual, setTelaAtual] = useState<"cadastro" | "dashboard">(
    "cadastro",
  );
  const [itens, setItens] = useState<Item[]>([]);

  // Função que passaremos para o Cadastro
  const handleAdicionarItem = (novoItem: Item) => {
    setItens([...itens, novoItem]);
  };

  const botaoMenu = (ativo: boolean) => ({
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: ativo ? "#0056b3" : "#e9ecef",
    color: ativo ? "white" : "#333",
    border: "none",
    borderRadius: "4px",
  });

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "30px",
          borderBottom: "2px solid #eee",
          paddingBottom: "15px",
        }}
      >
        <button
          onClick={() => setTelaAtual("cadastro")}
          style={botaoMenu(telaAtual === "cadastro")}
        >
          ➕ Novo Cadastro
        </button>
        <button
          onClick={() => setTelaAtual("dashboard")}
          style={botaoMenu(telaAtual === "dashboard")}
        >
          📊 Dashboard e Consulta
        </button>
      </div>

      {/* Aqui é onde a mágica dos componentes acontece: */}
      {telaAtual === "cadastro" ? (
        <Cadastro aoSalvar={handleAdicionarItem} />
      ) : (
        <Dashboard itens={itens} />
      )}
    </div>
  );
}
