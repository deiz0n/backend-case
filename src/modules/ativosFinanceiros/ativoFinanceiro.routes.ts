import { FastifyInstance } from "fastify";
import { AtivoFinanceiroController } from "./ativoFinanceiro.controller";
import zodToJsonSchema from "zod-to-json-schema";
import {responseSchemaErro, responseSchemaSucesso } from "../../core/schemas/response.schema";
import {criarAtivoFinanceiroSchema} from "./ativoFinanceiro.schema";

export class AtivoFinanceiroRoutes {
    constructor(private ativoFinanceiroController: AtivoFinanceiroController) {}

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
            (request, reply) => this.ativoFinanceiroController.buscarTodosHandler(request, reply)
        );
    }

    async criarAtivoFinanceiro(fastify: FastifyInstance) {
        fastify.post(
            "/criar",
            {
                schema: {
                    body: zodToJsonSchema(criarAtivoFinanceiroSchema),
                    response: {
                        201: zodToJsonSchema(responseSchemaSucesso),
                        400: zodToJsonSchema(responseSchemaErro),
                        500: zodToJsonSchema(responseSchemaErro),
                    },
                },
            },
            (request, reply) => this.ativoFinanceiroController.criarAtivoFinanceiroHandler(request, reply)
        );
    }
}