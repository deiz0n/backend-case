import Fastify, { FastifyInstance } from 'fastify';
import { ModuloPrincipal } from './modules';
import { ClienteInvalidoError } from './core/errors/ClienteInvalidoError';
import {ClienteExistenteError} from "./core/errors/ClienteExistenteError";

export async function buildServer(): Promise<FastifyInstance> {
    const server = Fastify({
        logger: true,
    });

    const modulos = new ModuloPrincipal();
    await modulos.registrar(server);

    server.setErrorHandler((error, request, reply) => {
        if (error.validation) {
            return reply.status(400).send({
                mensagem: "Erro de validação",
                status: "400",
                data: new Date().toISOString(),
                detalhes: error.message
            });
        }
        if (error instanceof ClienteInvalidoError || error instanceof ClienteExistenteError) {
            return reply.status(error.status).send({
                mensagem: "Erro ao criar cliente",
                status: error.status.toString(),
                data: error.data.toISOString(),
                detalhes: error.message
            });
        }
        reply.status(500).send({
            mensagem: "Erro interno do servidor",
            status: "500",
            data: new Date().toISOString(),
            detalhes: error.message
        });
    });

    return server;
}