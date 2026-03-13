import express from "express";
import cors from "cors";
import { createUser } from "./controllers/userController.js";
import { createSimulation } from "./controllers/simulationController.js";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" })); // React dev server
app.use(express.json());

// Rotas
app.post("/users", createUser);
app.post("/simulations", createSimulation);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});