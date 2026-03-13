-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "income" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Simulation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL NOT NULL,
    "months" INTEGER NOT NULL,
    "rate" REAL NOT NULL,
    "installment" REAL NOT NULL,
    "totalPaid" REAL NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Simulation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
