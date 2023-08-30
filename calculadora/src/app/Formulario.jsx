"use client";
import { useState } from "react";

const Formulario = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    telefone: "",
    email: "",
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome Completo:</label>
        <input
          type="text"
          name="nomeCompleto"
          value={formData.nomeCompleto}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>CEP:</label>
        <input
          type="text"
          name="cep"
          value={formData.cep}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Estado:</label>
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Cidade:</label>
        <input
          type="text"
          name="cidade"
          value={formData.cidade}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Bairro:</label>
        <input
          type="text"
          name="bairro"
          value={formData.bairro}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Rua:</label>
        <input
          type="text"
          name="rua"
          value={formData.rua}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Número:</label>
        <input
          type="text"
          name="numero"
          value={formData.numero}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Complemento:</label>
        <input
          type="text"
          name="complemento"
          value={formData.complemento}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Confirmar</button>
    </form>
  );
};

export default Formulario;
