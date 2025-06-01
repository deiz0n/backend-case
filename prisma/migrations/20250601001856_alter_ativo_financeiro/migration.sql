/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `AtivoFinanceiro` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `AtivoFinanceiro_nome_key` ON `AtivoFinanceiro`(`nome`);
