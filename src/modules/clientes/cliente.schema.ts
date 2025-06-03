import { z } from 'zod';

import { ativoFinanceiroResponseShema } from '../ativosFinanceiros/ativoFinanceiro.schema';

export const statusEnum = z.enum(['ATIVO', 'INATIVO']);

export const criarClienteSchema = z.object({
    nome: z.string().nonempty(
        { message: "Nome é obrigatório" }
    ).min(10, 
        { message: "Nome deve ter pelo menos 10 caracteres"}
    ),
    email: z.string().nonempty(
        { message: "Email é obrigatório" }
    ).refine(
        (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        { message: "E-mail inválido" }
    ),
    ativos: z.array(z.string().uuid()).optional().default([])
});

export type CriarClienteSchemaInput = z.infer<typeof criarClienteSchema>;

export const atualizarClienteSchema = z.object({
    nome: z.string().min(10).optional(),
    email: z.string().email().optional(),
    status: statusEnum.optional(),
    ativos: z.array(z.string().uuid()).optional()
});

export type AtualizarClienteSchemaInput = z.infer<typeof atualizarClienteSchema>;

export const clienteResponseSchema = z.object({
    id: z.string().uuid(),
    nome: z.string(),
    email: z.string().nonempty().refine(
        (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
    ),
    status: statusEnum,
    ativos: z.array(ativoFinanceiroResponseShema)
});