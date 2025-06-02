import { prisma } from "../../prisma/client";
import {CriarAtivoFinanceiroInput} from "./ativoFinanceiro.schema";

export class AtivoFinanceiroRepository {
    async buscarTodos() {
        return prisma.ativoFinanceiro.findMany();
    }

    async criar(data: CriarAtivoFinanceiroInput) {
        return prisma.ativoFinanceiro.create({
            data: data
        });
    }
}