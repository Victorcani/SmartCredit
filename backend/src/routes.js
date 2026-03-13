import { Router } from "express"

import { createUser } from "./controllers/userController.js"
import { createSimulation, getSimulations } from "./controllers/simulationController.js"

const router = Router()

router.post("/users", createUser)

router.post("/simulations", createSimulation)

router.get("/simulations/:userId", getSimulations)

export default router