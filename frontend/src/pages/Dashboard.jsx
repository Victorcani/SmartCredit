import React, {useEffect,useState} from "react"
import {api} from "../services/api"

export default function Dashboard({userId}){

  const [sims,setSims] = useState([])

  async function loadSimulations(){

    const res = await api.get(`/simulations/${userId}`)

    setSims(res.data)

  }

  useEffect(()=>{

    loadSimulations()

  },[userId])

  return(

    <div style={{padding:40}}>

      <h2>Histórico de Simulações</h2>

      <button onClick={loadSimulations}>
        Atualizar histórico
      </button>

      {sims.map(sim=>(

        <div key={sim.id} style={{border:"1px solid #ccc",padding:10,marginTop:10}}>

          <p>Valor: {sim.amount}</p>

          <p>Parcelas: {sim.months}</p>

          <p>Parcela: {sim.installment}</p>

          <p>Total Pago: {sim.totalPaid}</p>

        </div>

      ))}

    </div>

  )
}