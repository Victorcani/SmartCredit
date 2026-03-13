/*
  Warnings:

  - You are about to drop the column `amount` on the `Simulation` table. All the data in the column will be lost.
  - You are about to drop the column `installment` on the `Simulation` table. All the data in the column will be lost.
  - You are about to drop the column `months` on the `Simulation` table. All the data in the column will be lost.
  - You are about to drop the column `rate` on the `Simulation` table. All the data in the column will be lost.
  - You are about to drop the column `totalPaid` on the `Simulation` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Simulation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Simulation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Simulation" ("id", "userId") SELECT "id", "userId" FROM "Simulation";
DROP TABLE "Simulation";
ALTER TABLE "new_Simulation" RENAME TO "Simulation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
