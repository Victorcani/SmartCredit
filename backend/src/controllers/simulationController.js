import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createSimulation(req, res) {
  try {
    const { userId, amount, term } = req.body;

    // Validação dos campos
    if (!userId || !amount || !term) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    // Verifica se o usuário existe
    const user = await prisma.user.findUnique({ where: { id: Number(userId) } });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Cria a simulação e inclui os dados do usuário
    const simulation = await prisma.simulation.create({
      data: {
        userId: Number(userId),
        amount: Number(amount),
        term: Number(term),
      },
      include: {
        user: true, // ✅ inclui os dados do usuário na resposta
      },
    });

    // Calcula parcelas (exemplo simples)
    const monthlyInstallment = Number(amount) / Number(term);

    // Retorna simulação completa
    res.json({
      id: simulation.id,
      amount: simulation.amount,
      term: simulation.term,
      monthlyInstallment: monthlyInstallment.toFixed(2),
      user: {
        id: simulation.user.id,
        name: simulation.user.name,
        email: simulation.user.email,
        income: simulation.user.income,
      },
    });
  } catch (error) {
    console.error("Erro ao criar simulação:", error);
    res.status(500).json({ message: "Erro ao criar simulação" });
  }
}