import { FastifyInstance } from "fastify";
import { ClienteRepository } from "./clientes/cliente.repository";
import { ClienteService } from "./clientes/cliente.service";
import { ClienteController } from "./clientes/cliente.controller";
import { ClienteRoutes } from "./clientes/cliente.routes";

export class ModuloPrincipal {
    private clienteRepository = new ClienteRepository();
    private clienteService = new ClienteService(this.clienteRepository);
    private clienteController = new ClienteController(this.clienteService);
    private clienteRoutes = new ClienteRoutes(this.clienteController);

    async registrar(fastify: FastifyInstance) {
        await fastify.register(async (instance) => {
            await this.clienteRoutes.criarCliente(instance);
        }, { prefix: "/clientes" });
    }
}