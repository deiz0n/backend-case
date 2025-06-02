import { AtivoFinanceiroRepository } from "./ativoFinanceiro.repository";
import { entidadeToResponse } from "../../core/utils/mapper/mapper";
import { ativoFinanceiroResponseShema } from "./ativoFinanceiro.schema";

export class AtivoFinanceiroService {
    constructor(private ativoFinanceiroRepository: AtivoFinanceiroRepository) {}

    async buscarTodos() {
        const ativos = await this.ativoFinanceiroRepository.buscarTodos();

        return entidadeToResponse(ativos, ativoFinanceiroResponseShema);
    }
}