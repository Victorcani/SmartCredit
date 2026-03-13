import React, { useState, useEffect } from "react";
import Register from "./register";      // Ajuste conforme a pasta
import Simulation from "./Simulation"; // Ajuste conforme a pasta

export default function LandingPage() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) setUserId(storedId);
  }, []);

  // Callback que recebe o id do usuário após o registro
  function handleRegister(id) {
    localStorage.setItem("userId", id);
    setUserId(id);
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      <h1 style={{ color: "#007bff" }}>SmartCredit</h1>
      <p>Bem-vindo à nossa plataforma de simulação de empréstimos!</p>

      {!userId ? (
        <Register onRegister={handleRegister} />
      ) : (
        <Simulation />
      )}
    </div>
  );
}