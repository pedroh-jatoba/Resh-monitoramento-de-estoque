import type { Item } from "../types";
import CodigoBarras from "./CodigoBarras";

interface MostrarItemProps {
  item: Item;
  aoVoltar: () => void;
}

export default function MostrarItem({ item, aoVoltar }: MostrarItemProps) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#33333333",
        marginTop: "20px",
      }}
    >
      <button
        onClick={aoVoltar}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "#0056b3",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        ← Voltar para o Dashboard
      </button>

      <h2 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
        Detalhes do Equipamento: {item.nome}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          <strong>ID / Nº de Patrimônio:</strong>
          <p style={{ margin: "5px 0", fontSize: "18px" }}>{item.idUnico}</p>
        </div>

        <div>
          <strong>Código de Barras:</strong>
          <div
            style={{
              marginTop: "10px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              display: "inline-block",
              border: "1px dashed #ccc",
            }}
          >
            <CodigoBarras valor={item.idUnico} />
          </div>
        </div>

        <div>
          <strong>Descrição:</strong>
          <p
            style={{
              margin: "5px 0",
              padding: "15px",
              backgroundColor: "#33333333",
              borderRadius: "4px",
              borderLeft: "4px solid #0056b3",
            }}
          >
            {item.descricao}
          </p>
        </div>

        <div>
          <strong>Estado de Conservação:</strong>
          <span
            style={{
              marginLeft: "10px",
              padding: "6px 12px",
              backgroundColor: "#17a2b8",
              color: "white",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {item.estadoConservacao}
          </span>
        </div>
      </div>
    </div>
  );
}
