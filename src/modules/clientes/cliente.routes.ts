import {ClienteController} from "./cliente.controller";
import {FastifyInstance} from "fastify";
import { zodToJsonSchema } from "zod-to-json-schema";

import { criarClienteSchema } from "./cliente.schema";
import {responseSchemaErro, responseSchemaSucesso} from "../../core/schemas/response.schema";

export class ClienteRoutes {
    constructor(private clienteController: ClienteController) {}

    async criarCliente(fastify: FastifyInstance) {
        fastify.post(
            "/criar",
            {
                schema: {
                    body: zodToJsonSchema(criarClienteSchema),
                    response: {
                        201: zodToJsonSchema(responseSchemaSucesso),
                        400: zodToJsonSchema(responseSchemaErro),
                        500: zodToJsonSchema(responseSchemaErro),
                    },
                },
            },
            (request, reply) => this.clienteController.criarClienteHandler(request, reply)
        );
    }
}