import Barcode from "react-barcode";

interface CodigoBarrasProps {
  valor: string;
}

export default function CodigoBarras({ valor }: CodigoBarrasProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "5px",
        borderRadius: "4px",
      }}
    >
      <Barcode
        value={valor}
        width={1.5}
        height={40}
        fontSize={14}
        background="transparent"
      />
    </div>
  );
}
