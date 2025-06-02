import {ClienteRepository} from "./cliente.repository";
import {clienteResponseSchema, criarClienteSchema, CriarClienteSchemaInput} from "./cliente.schema";
import {ClienteExistenteError} from "../../core/errors/ClienteExistenteError";
import {entidadeToResponse} from "../../core/utils/mapper/mapper";

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
        const eExistente = await this.clienteRepository.buscarPorEmail(data.email);

        if (eExistente) throw new ClienteExistenteError();

        const cliente = await this.clienteRepository.criar(data);

        return entidadeToResponse(cliente, clienteResponseSchema);
    }

}