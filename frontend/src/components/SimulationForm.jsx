import React, { useState } from "react"
import axios from "axios"

export default function SimulationForm() {
  const [amount, setAmount] = useState("")
  const [months, setMonths] = useState("")
  const [result, setResult] = useState(null)

  const userId = localStorage.getItem("userId")

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/simulations", {
        amount: Number(amount),
        months: Number(months),
        userId: Number(userId),
      })
      setResult(response.data)
    } catch (err) {
      console.error(err)
      alert("Erro ao simular empréstimo")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-3">
          <label>Valor do empréstimo</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-3">
          <label>Meses</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Simular
        </button>
      </form>

      {result && (
        <div className="bg-gray-50 p-4 rounded border">
          <h3 className="text-xl font-semibold mb-2">Resultado da Simulação</h3>
          <p>Parcela mensal: R$ {result.installment.toFixed(2)}</p>
          <p>Total pago: R$ {result.totalPaid.toFixed(2)}</p>
          <p>Impacto na renda: {result.incomeImpact.toFixed(2)}%</p>
          <p>Score de risco: {result.score}</p>
          <p>Recomendação: {result.recommendation}</p>
        </div>
      )}
    </div>
  )
}