import { prisma } from "../../prisma/client";

export class AtivoFinanceiroRepository {
    async buscarTodos() {
        return prisma.ativoFinanceiro.findMany();
    }
}