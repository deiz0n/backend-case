import {ClienteController} from "./cliente.controller";
import {FastifyInstance} from "fastify";
import { zodToJsonSchema } from "zod-to-json-schema";

import { criarClienteSchema } from "./cliente.schema";
import {responseSchemaErro, responseSchemaSucesso} from "../../core/schemas/response.schema";

export class ClienteRoutes {
    constructor(private clienteController: ClienteController) {}

    async buscarTodos(fastify: FastifyInstance) {
        fastify.get(
            "/",
            {
                schema: {
                    response: {
                        200: zodToJsonSchema(responseSchemaSucesso),
                        500: zodToJsonSchema(responseSchemaErro),
                    },
                },
            },
            (request, reply) => this.clienteController.buscarTodosHanlder(request, reply)
        );
    }

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