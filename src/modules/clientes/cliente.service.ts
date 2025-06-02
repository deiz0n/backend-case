import {ClienteRepository} from "./cliente.repository";
import {
    atualizarClienteSchema,
    AtualizarClienteSchemaInput,
    clienteResponseSchema, criarClienteSchema,
    CriarClienteSchemaInput,
    statusEnum
} from "./cliente.schema";
import {ClienteExistenteError} from "../../core/errors/ClienteExistenteError";
import {entidadeToResponse} from "../../core/utils/mapper/mapper";
import { ZodSchema, ZodError} from "zod";
import { ClienteInvalidoError } from "../../core/errors/ClienteInvalidoError";
import {ClienteNaoEncontradoError} from "../../core/errors/ClienteNaoEncontradoError";


function validarCliente<T>(schema: ZodSchema<T>, data: unknown) {
    try {
        return schema.parse(data);
    } catch (error) {
        if (error instanceof ZodError) {
            const detalhes = error.errors?.[0]?.message || "Erro de validação";
            throw new ClienteInvalidoError(detalhes);
        }
        throw error;
    }
}

export class ClienteService {
    constructor(private clienteRepository: ClienteRepository) {}

    async buscarTodos() {
        const clientes = await this.clienteRepository.buscarTodos();

        return clientes.map(cliente => {
            const ativos = (cliente.ativos ?? []).map(ativo => ({
                ...ativo,
                valorAtual: typeof ativo.valorAtual === "object" && "toNumber" in ativo.valorAtual
                    ? ativo.valorAtual.toNumber()
                    : ativo.valorAtual
            }));
            return entidadeToResponse({ ...cliente, ativos }, clienteResponseSchema);
        });
    }

    async criar(data: CriarClienteSchemaInput) {
        validarCliente(criarClienteSchema, data);

        const eExistente = await this.clienteRepository.buscarPorEmail(data.email);
        if (eExistente) throw new ClienteExistenteError();

        const cliente = await this.clienteRepository.criar(data);

        const ativos = (cliente.ativos ?? []).map(ativo => ({
            ...ativo,
            valorAtual: typeof ativo.valorAtual === "object" && "toNumber" in ativo.valorAtual
                ? ativo.valorAtual.toNumber()
                : ativo.valorAtual
        }));

        return entidadeToResponse({ ...cliente, ativos }, clienteResponseSchema);
    }

    async atualizar(id: string, data: AtualizarClienteSchemaInput) {
        validarCliente(atualizarClienteSchema, data);

        if (!await this.clienteRepository.buscarPorId(id)) throw new ClienteNaoEncontradoError(`O cliente com id: ${id} não foi encontrado`)
        if (data.status !== "ATIVO" && data.status !== "INATIVO") throw new ClienteNaoEncontradoError(`Os valores para status são: ${statusEnum.Values}`)

        const cliente = await this.clienteRepository.atualizar(id, data);
        const ativos = (cliente.ativos ?? []).map(ativo => ({
            ...ativo,
            valorAtual: typeof ativo.valorAtual === "object" && "toNumber" in ativo.valorAtual
                ? ativo.valorAtual.toNumber()
                : ativo.valorAtual
        }));
        return entidadeToResponse({ ...cliente, ativos }, clienteResponseSchema);
    }
}