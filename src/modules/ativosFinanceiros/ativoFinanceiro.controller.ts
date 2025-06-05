import { AtivoFinanceiroService } from "./ativoFinanceiro.service";
import { FastifyReply, FastifyRequest } from "fastify";
import { responseSchemaErro, responseSchemaSucesso } from "../../core/schemas/response.schema";
import { CriarAtivoFinanceiroInput } from "./ativoFinanceiro.schema";
import { AtivoFinanceiroExistenteError } from "../../core/errors/AtivoFinanceiroExistenteError";
import { AtivoFinanceiroInvalidoError } from "../../core/errors/AtivoFinanceiroInvalidoError";
import {ClienteNaoEncontradoError} from "../../core/errors/ClienteNaoEncontradoError";
import {ClienteRepository} from "../clientes/cliente.repository";
import {ClienteService} from "../clientes/cliente.service";

export class AtivoFinanceiroController {
    constructor(
        private ativoFinanceiroService: AtivoFinanceiroService) {}

    async buscarTodosHandler(request: FastifyRequest, reply: FastifyReply) {
        try {
            const ativos = await this.ativoFinanceiroService.buscarTodos();
            const response = {
                mensagem: "Ativos encontrados com sucesso",
                status: "200",
                data: new Date().toISOString(),
                dados: ativos
            };
            responseSchemaSucesso.parse(response);
            return reply.status(200).send(response);
        } catch (error) {
            const response = {
                mensagem: "Erro ao buscar ativos",
                status: "500",
                data: new Date().toISOString(),
                detalhes: error instanceof Error ? error.message : ""
            };
            responseSchemaErro.parse(response);
            return reply.status(500).send(response);
        }
    }

    async buscarPorClienteIdHandler(request: FastifyRequest<{Querystring: {clienteId: string}}>, reply: FastifyReply) {
        try {
            const { clienteId } = request.query;

            const ativos = await this.ativoFinanceiroService.buscarAtivosPorClienteId(clienteId);

            const response = {
                mensagem: "Ativos do cliente encontrados com sucesso",
                status: "200",
                data: new Date().toISOString(),
                dados: ativos
            };

            responseSchemaSucesso.parse(response);
            return reply.status(200).send(response);
        } catch (error) {
            if (error instanceof ClienteNaoEncontradoError) {
                const response = {
                    mensagem: error.message,
                    status: "404",
                    data: new Date().toISOString(),
                    detalhes: error.detalhes
                };
                responseSchemaErro.parse(response);
                return reply.status(404).send(response);
            }

            const response = {
                mensagem: "Erro ao buscar ativos do cliente",
                status: "500",
                data: new Date().toISOString(),
                detalhes: error instanceof Error ? error.message : ""
            };
            responseSchemaErro.parse(response);
            return reply.status(500).send(response);
        }
    }

    async criarAtivoFinanceiroHandler(request: FastifyRequest, reply: FastifyReply) {
        try {
            const data = request.body as CriarAtivoFinanceiroInput;
            const ativo = await this.ativoFinanceiroService.criar(data);

            const response = {
                mensagem: "Ativo criado com sucesso",
                status: "201",
                data: new Date().toISOString(),
                dados: ativo
            };
            responseSchemaSucesso.parse(response);
            return reply.status(201).send(response);
        } catch (error) {
            if (error instanceof AtivoFinanceiroExistenteError) {
                const response = {
                    mensagem: error.message,
                    status: error.status.toString(),
                    data: new Date().toISOString(),
                    detalhes: ""
                };
                responseSchemaErro.parse(response);
                return reply.status(error.status).send(response);
            }
            if (error instanceof AtivoFinanceiroInvalidoError) {
                const response = {
                    mensagem: error.message,
                    status: error.status.toString(),
                    data: error.data.toISOString(),
                    detalhes: error.detalhes
                };
                responseSchemaErro.parse(response);
                return reply.status(error.status).send(response);
            }
            const response = {
                mensagem: "Erro interno do servidor",
                status: "500",
                data: new Date().toISOString(),
                detalhes: error instanceof Error ? error.message : ""
            };
            responseSchemaErro.parse(response);
            return reply.status(500).send(response);
        }
    }
}