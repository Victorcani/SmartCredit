import React, { useEffect, useState } from "react"
import axios from "axios"

export default function SimulationHistory() {
  const [history, setHistory] = useState([])
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:3000/simulations/${userId}`)
        .then((res) => setHistory(res.data))
        .catch((err) => console.error(err))
    }
  }, [userId])

  if (!history.length) return null

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Histórico de Simulações</h3>
      {history.map((sim) => (
        <div
          key={sim.id}
          className="border p-3 mb-2 rounded bg-gray-50"
        >
          <p>Valor: R$ {sim.amount}</p>
          <p>Meses: {sim.months}</p>
          <p>Parcela: R$ {sim.installment.toFixed(2)}</p>
          <p>Score: {sim.score}</p>
        </div>
      ))}
    </div>
  )
}