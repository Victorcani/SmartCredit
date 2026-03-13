import React from "react";
import SimulationForm from "../components/SimulationForm";
import SimulationHistory from "../components/SimulationHistory";

export default function Simulation() {
  return (
    <div>
      <SimulationForm />
      <SimulationHistory />
    </div>
  );
}