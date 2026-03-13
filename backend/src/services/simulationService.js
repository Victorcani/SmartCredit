function simulateCredit(amount, months, income) {
  const rate = 0.02;
  const installment = (amount * (1 + rate * months)) / months;
  const totalPaid = installment * months;
  const incomeImpact = (installment / income) * 100;

  return {
    rate,
    installment: installment.toFixed(2),
    totalPaid: totalPaid.toFixed(2),
    incomeImpact: incomeImpact.toFixed(2)
  };
}

module.exports = { simulateCredit };