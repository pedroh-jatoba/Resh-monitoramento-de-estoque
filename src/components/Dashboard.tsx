import { useState } from "react";
import type { Item } from "../types";

interface DashboardProps {
  itens: Item[];
}

export default function Dashboard({ itens }: DashboardProps) {
  const [termoBusca, setTermoBusca] = useState("");

  const itensFiltrados = itens.filter(
    (item) =>
      item.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      item.idUnico.toLowerCase().includes(termoBusca.toLowerCase()),
  );

  const contagem = {
    Novo: itens.filter((i) => i.estadoConservacao === "Novo").length,
    Bom: itens.filter((i) => i.estadoConservacao === "Bom").length,
    Regular: itens.filter((i) => i.estadoConservacao === "Regular").length,
    Ruim: itens.filter((i) => i.estadoConservacao === "Ruim").length,
    Pessimo: itens.filter((i) => i.estadoConservacao === "Pessimo").length,
    PerdaTotal: itens.filter((i) => i.estadoConservacao === "Perda Total")
      .length,
  };

  const cardStyle = {
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
    textAlign: "center" as const,
  };
  const thTdStyle = { padding: "12px", border: "1px solid #ddd" };

  return (
    <div>
      <h2>Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{ ...cardStyle, backgroundColor: "#0056b3", color: "white" }}
        >
          <h3 style={{ margin: 0 }}>{itens.length}</h3>
          <p style={{ margin: 0 }}>Total</p>
        </div>
        <div style={{ ...cardStyle, borderTop: "4px solid #28a745" }}>
          <h3 style={{ margin: 0 }}>{contagem.Novo}</h3>
          <p style={{ margin: 0 }}>Novos</p>
        </div>
        <div style={{ ...cardStyle, borderTop: "4px solid #17a2b8" }}>
          <h3 style={{ margin: 0 }}>{contagem.Bom}</h3>
          <p style={{ margin: 0 }}>Bons</p>
        </div>
        <div style={{ ...cardStyle, borderTop: "4px solid #ffc107" }}>
          <h3 style={{ margin: 0 }}>{contagem.Regular}</h3>
          <p style={{ margin: 0 }}>Regulares</p>
        </div>
        <div style={{ ...cardStyle, borderTop: "4px solid #fd7e14" }}>
          <h3 style={{ margin: 0 }}>{contagem.Ruim}</h3>
          <p style={{ margin: 0 }}>Ruins</p>
        </div>
        <div style={{ ...cardStyle, borderTop: "4px solid #dc3545" }}>
          <h3 style={{ margin: 0 }}>{contagem.Pessimo}</h3>
          <p style={{ margin: 0 }}>Péssimos</p>
        </div>
      </div>

      <h2>Consulta de Itens</h2>
      <input
        type="text"
        placeholder="🔍 Pesquise por ID ou Nome..."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
            <th style={thTdStyle}>ID / Patrimônio</th>
            <th style={thTdStyle}>Nome</th>
            <th style={thTdStyle}>Descrição</th>
            <th style={thTdStyle}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {itensFiltrados.map((item) => (
            <tr key={item.idUnico}>
              <td style={thTdStyle}>
                <strong>{item.idUnico}</strong>
              </td>
              <td style={thTdStyle}>{item.nome}</td>
              <td style={thTdStyle}>{item.descricao}</td>
              <td style={thTdStyle}>{item.estadoConservacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
