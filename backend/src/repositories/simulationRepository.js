const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createSimulation(data) {
  return prisma.simulation.create({ data });
}

async function listByUser(userId) {
  return prisma.simulation.findMany({
    where: { userId }
  });
}

module.exports = { createSimulation, listByUser };