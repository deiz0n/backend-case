import { ClienteService } from "./cliente.service";
import { atualizarClienteSchema, AtualizarClienteSchemaInput, criarClienteSchema} from "./cliente.schema";
import { ClienteExistenteError} from "../../core/errors/ClienteExistenteError";
import { FastifyReply, FastifyRequest } from "fastify";
import { responseSchemaErro, responseSchemaSucesso } from "../../core/schemas/response.schema";

export class ClienteController {
    constructor(private clienteService: ClienteService) {}

    async buscarTodosHanlder(request: FastifyRequest, reply: FastifyReply) {
        try {
            const clientes = await this.clienteService.buscarTodos();
            const response = {
                mensagem: "Clientes encontrados com sucesso",
                status: "200",
                data: new Date().toISOString(),
                dados: clientes
            };
            responseSchemaSucesso.parse(response);
            return reply.status(200).send(response);
        } catch (error) {
            const response = {
                mensagem: "Erro ao buscar clientes",
                status: "500",
                data: new Date().toISOString(),
                detalhes: error instanceof Error ? error.message : ""
            };
            responseSchemaErro.parse(response);
            return reply.status(500).send(response);
        }
    }

    async criarClienteHandler(request: FastifyRequest, reply: FastifyReply) {
        try {
            const data = criarClienteSchema.parse(request.body);
            const cliente = await this.clienteService.criar(data);

            const response = {
                mensagem: "Cliente criado com sucesso",
                status: "201",
                data: new Date().toISOString(),
                dados: cliente
            };
            responseSchemaSucesso.parse(response);
            return reply.status(201).send(response);
        } catch (error) {
            if (error instanceof ClienteExistenteError) {
                const response = {
                    mensagem: error.message,
                    status: error.status.toString(),
                    data: new Date().toISOString(),
                    detalhes: error.data ?? ""
                };
                responseSchemaErro.parse(response);
                return reply.status(error.status).send(response);
            }
            if (error instanceof Error) {
                const response = {
                    mensagem: error.message,
                    status: "400",
                    data: new Date().toISOString(),
                    detalhes: ""
                };
                responseSchemaErro.parse(response);
                return reply.status(400).send(response);
            }
            const response = {
                mensagem: "Erro interno do servidor",
                status: "500",
                data: new Date().toISOString(),
                detalhes: ""
            };
            responseSchemaErro.parse(response);
            return reply.status(500).send(response);
        }
    }

    async atualizarClienteHandler(request: FastifyRequest, reply: FastifyReply) {
        try {
            const id = (request.params as any).id;
            const data = atualizarClienteSchema.parse(request.body) as AtualizarClienteSchemaInput;
            const cliente = await this.clienteService.atualizar(id, data);

            const response = {
                mensagem: "Cliente atualizado com sucesso",
                status: "200",
                data: new Date().toISOString(),
                dados: cliente
            };
            responseSchemaSucesso.parse(response);
            return reply.status(200).send(response);
        } catch (error) {
            const response = {
                mensagem: "Erro ao atualizar cliente",
                status: "400",
                data: new Date().toISOString(),
                detalhes: error instanceof Error ? error.message : ""
            };
            responseSchemaErro.parse(response);
            return reply.status(400).send(response);
        }
    }
}