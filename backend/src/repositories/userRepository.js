const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUser(data) {
  return prisma.user.create({ data });
}

async function findUserById(id) {
  return prisma.user.findUnique({
    where: { id }
  });
}

module.exports = { createUser, findUserById };