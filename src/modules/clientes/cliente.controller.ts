import { ClienteService } from "./cliente.service";
import { criarClienteSchema } from "./cliente.schema";
import { ClienteExistenteError} from "../../core/errors/ClienteExistenteError";
import { FastifyReply, FastifyRequest } from "fastify";

export class ClienteController {
    constructor(private clienteService: ClienteService) {}

    async criarClienteHandler(request: FastifyRequest, reply: FastifyReply) {
        try {
            const data = criarClienteSchema.parse(request.body);
            const cliente = await this.clienteService.criar(data);
            return reply.status(201).send(cliente);
        } catch (error) {
            if (error instanceof ClienteExistenteError) {
                return reply.status(error.status).send({
                    message: error.message,
                    data: error.data,
                    status: error.status
                });
            }
            if (error instanceof Error) {
                return reply.status(400).send({ message: error.message });
            }
            return reply.status(500).send({ message: "Erro interno do servidor" });
        }
    }
}