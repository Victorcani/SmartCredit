import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [income, setIncome] = useState("");
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [simulationResult, setSimulationResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form enviado:", { name, email, income, amount, term });

    try {
      // 1️⃣ Cria o usuário
      const userResponse = await axios.post("http://localhost:3000/users", {
        name,
        email,
        income: Number(income),
      });
      const user = userResponse.data;
      console.log("Usuário criado:", user);

      // 2️⃣ Cria a simulação usando o ID do usuário
      const simulationResponse = await axios.post(
        "http://localhost:3000/simulations",
        {
          userId: user.id,
          amount: Number(amount),
          term: Number(term),
        }
      );
      const simulation = simulationResponse.data;
      console.log("Simulação criada:", simulation);

      setSimulationResult(simulation);
    } catch (error) {
      if (error.response) {
        console.error("Erro do backend:", error.response.data);
      } else {
        console.error("Erro na requisição:", error.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Renda"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor da Simulação"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prazo (meses)"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Cadastrar e Simular</button>
      </form>

      {simulationResult && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Simulação Criada:</h3>
          <p><strong>ID:</strong> {simulationResult.id}</p>
          <p><strong>Valor:</strong> {simulationResult.amount}</p>
          <p><strong>Prazo:</strong> {simulationResult.term} meses</p>
          <p><strong>Parcela Mensal:</strong> {simulationResult.monthlyInstallment}</p>
          <h4>Usuário:</h4>
          <p><strong>ID:</strong> {simulationResult.user.id}</p>
          <p><strong>Nome:</strong> {simulationResult.user.name}</p>
          <p><strong>Email:</strong> {simulationResult.user.email}</p>
          <p><strong>Renda:</strong> {simulationResult.user.income}</p>
        </div>
      )}
    </div>
  );
}