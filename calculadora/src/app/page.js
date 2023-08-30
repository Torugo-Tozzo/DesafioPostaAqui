"use client";
import React, { useState } from 'react';
import Formulario from "./Formulario";

export default function Home() {
  const [dadosEnviados, setDadosEnviados] = useState(null);

  const handleFormSubmit = (formData) => {
    setDadosEnviados(formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {dadosEnviados ? (
        <div className="mb-4">
          <h2>Dados Enviados:</h2>
          <pre>{JSON.stringify(dadosEnviados, null, 2)}</pre>
        </div>
      ) : null}
      <Formulario onSubmit={handleFormSubmit} />
    </main>
  )
}
