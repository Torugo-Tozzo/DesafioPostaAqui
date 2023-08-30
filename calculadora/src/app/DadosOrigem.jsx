"use client";

const DadosOrigem = ({ formData }) => {
  return (
    <div>
      <h2>Dados de Origem:</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default DadosOrigem;
