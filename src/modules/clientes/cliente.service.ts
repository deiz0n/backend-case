import {ClienteRepository} from "./cliente.repository";
import {clienteResponseSchema, criarClienteSchema, CriarClienteSchemaInput} from "./cliente.schema";
import {ClienteExistenteError} from "./errors/ClienteExistenteError";
import {entidadeToResponse} from "../../core/utils/mapper/mapper";

export class ClienteService {
    constructor(private clienteRepository: ClienteRepository) {}

    async criar(data: CriarClienteSchemaInput) {
        const eExistente = await this.clienteRepository.buscarPorEmail(data.email);

        if (eExistente) throw new ClienteExistenteError();

        const cliente = await this.clienteRepository.criar(data);

        return entidadeToResponse(cliente, clienteResponseSchema);
    }

}