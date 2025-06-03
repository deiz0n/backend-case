import { AtivoFinanceiroRepository } from "./ativoFinanceiro.repository";
import { entidadeToResponse } from "../../core/utils/mapper/mapper";
import {
    ativoFinanceiroResponseShema,
    CriarAtivoFinanceiroInput,
    criarAtivoFinanceiroSchema
} from "./ativoFinanceiro.schema";
import { ZodError, ZodSchema } from "zod";
import { AtivoFinanceiroInvalidoError } from "../../core/errors/AtivoFinanceiroInvalidoError";
import { AtivoFinanceiroExistenteError } from "../../core/errors/AtivoFinanceiroExistenteError";


function validarAtivoFinanceiro<T>(schema: ZodSchema<T>, data: unknown) {
    try {
        return schema.parse(data);
    } catch (error) {
        if (error instanceof ZodError) {
            const detalhes = error.errors?.[0]?.message || "Erro de validação";
            throw new AtivoFinanceiroInvalidoError(detalhes);
        }
        throw error;
    }
}

export class AtivoFinanceiroService {
    constructor(private ativoFinanceiroRepository: AtivoFinanceiroRepository) {}

    async buscarTodos() {
        const ativos = await this.ativoFinanceiroRepository.buscarTodos();

        return ativos.map(ativo => {
            const valorAtual = typeof ativo.valorAtual === "object" && "toNumber" in ativo.valorAtual
                ? ativo.valorAtual.toNumber()
                : ativo.valorAtual;
            return entidadeToResponse({...ativo, valorAtual}, ativoFinanceiroResponseShema);
        });
    }

    async criar(data: CriarAtivoFinanceiroInput) {
        validarAtivoFinanceiro(criarAtivoFinanceiroSchema, data);

        const eExistente = await this.ativoFinanceiroRepository.buscarPorNome(data.nome);
        if (eExistente) throw new AtivoFinanceiroExistenteError();

        const ativoFinanceiro = await this.ativoFinanceiroRepository.criar(data);

        const valorAtual = typeof ativoFinanceiro.valorAtual === "object" && "toNumber" in ativoFinanceiro.valorAtual
            ? ativoFinanceiro.valorAtual.toNumber()
            : ativoFinanceiro.valorAtual;

        return entidadeToResponse({ ...ativoFinanceiro, valorAtual }, ativoFinanceiroResponseShema);
    }
}