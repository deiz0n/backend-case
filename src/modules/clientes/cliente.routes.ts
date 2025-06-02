import {ClienteController} from "./cliente.controller";
import {FastifyInstance} from "fastify";
import { zodToJsonSchema } from "zod-to-json-schema";

import { clienteResponseSchema, criarClienteSchema } from "./cliente.schema";

export class ClienteRoutes {
    constructor(private clienteController: ClienteController) {}

    async criarCliente(fastify: FastifyInstance) {
        fastify.post(
            "/criar",
            {
                schema: {
                    body: zodToJsonSchema(criarClienteSchema),
                    response: {
                        201: zodToJsonSchema(clienteResponseSchema),
                    },
                },
            },
            (request, reply) => this.clienteController.criarClienteHandler(request, reply)
        );
    }
}