import { FastifyInstance } from "fastify";
import { ClienteRepository } from "./clientes/cliente.repository";
import { ClienteService } from "./clientes/cliente.service";
import { ClienteController } from "./clientes/cliente.controller";
import { ClienteRoutes } from "./clientes/cliente.routes";

import { AtivoFinanceiroRepository } from "./ativosFinanceiros/ativoFinanceiro.repository";
import { AtivoFinanceiroController } from "./ativosFinanceiros/ativoFinanceiro.controller";
import { AtivoFinanceiroService } from "./ativosFinanceiros/ativoFinanceiro.service";
import { AtivoFinanceiroRoutes } from "./ativosFinanceiros/ativoFinanceiro.routes";

export class ModuloPrincipal {
    private clienteRepository = new ClienteRepository();
    private clienteService = new ClienteService(this.clienteRepository);
    private clienteController = new ClienteController(this.clienteService);
    private clienteRoutes = new ClienteRoutes(this.clienteController);

    private ativoFinanceiroRepository = new AtivoFinanceiroRepository();
    private ativoFinanceiroService = new AtivoFinanceiroService(this.ativoFinanceiroRepository);
    private ativoFinanceiroController = new AtivoFinanceiroController(this.ativoFinanceiroService);
    private ativoFinanceiroRoutes = new AtivoFinanceiroRoutes(this.ativoFinanceiroController);

    async registrar(fastify: FastifyInstance) {
        await fastify.register(async (instance) => {
            await this.clienteRoutes.criarCliente(instance);
            await this.clienteRoutes.buscarTodos(instance);
            await this.clienteRoutes.atualizarCliente(instance);
        }, { prefix: "/clientes" });

        await fastify.register(async (instance) => {
            await this.ativoFinanceiroRoutes.criarAtivoFinanceiro(instance);
            await this.ativoFinanceiroRoutes.buscarTodos(instance);
        }, { prefix: "/ativos-financeiros" });
    }
}