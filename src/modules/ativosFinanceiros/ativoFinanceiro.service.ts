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
import {ClienteRepository} from "../clientes/cliente.repository";
import { ClienteNaoEncontradoError } from "../../core/errors/ClienteNaoEncontradoError";
import {AtivoFinanceiroNaoEncontrado} from "../../core/errors/AtivoFinanceiroNaoEncontrado";


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
    constructor(
        private ativoFinanceiroRepository: AtivoFinanceiroRepository,
        private clienteRepository: ClienteRepository
    ) {}

    async buscarTodos() {
        const ativos = await this.ativoFinanceiroRepository.buscarTodos();

        return ativos.map(ativo => {
            const valorAtual = typeof ativo.valorAtual === "object" && "toNumber" in ativo.valorAtual
                ? ativo.valorAtual.toNumber()
                : ativo.valorAtual;
            return entidadeToResponse({...ativo, valorAtual}, ativoFinanceiroResponseShema);
        });
    }

    async buscarAtivosPorClienteId(clienteId: string) {
        const cliente = await this.clienteRepository.buscarPorId(clienteId);
        if (!cliente) throw new ClienteNaoEncontradoError(`O cliente com id: ${clienteId} não foi encontrado`);

        const ativos = await this.ativoFinanceiroRepository.buscarPorClienteId(clienteId);

        return ativos.map(ativo => ({
            ...ativo,
            valorAtual: typeof ativo.valorAtual === "object" && "toNumber" in ativo.valorAtual
                ? ativo.valorAtual.toNumber()
                : ativo.valorAtual
        }));
    }

    async buscarPorId(id: string) {
        const ativoFinanceiro = await this.ativoFinanceiroRepository.buscarPorId(id);

        if (!ativoFinanceiro) throw new AtivoFinanceiroNaoEncontrado(`O cliente com id: ${id} não foi encontrado`)

        return entidadeToResponse(ativoFinanceiro, ativoFinanceiroResponseShema);
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