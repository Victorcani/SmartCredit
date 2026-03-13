import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(req, res) {
  try {
    const { name, email, income } = req.body;

    if (!name || !email || !income) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        income: Number(income),
      },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    if (error.code === "P2002") {
      return res.status(400).json({ message: "Email já cadastrado" });
    }
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
}