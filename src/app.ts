import Fastify, { FastifyInstance } from 'fastify';
import { ModuloPrincipal } from './modules';

export async function buildServer(): Promise<FastifyInstance> {
    const server = Fastify({
        logger: true,
    });

    const modulos = new ModuloPrincipal();
    await modulos.registrar(server);

    server.setErrorHandler((error, request, reply) => {
        request.log.error(error);
        if ((error as any).validation) {
            reply.status(400).send({ message: 'Erro de validação', errors: (error as any).validation });
        } else {
            reply.status(500).send({ message: 'Erro interno do servidor' });
        }
    });

    return server;
}