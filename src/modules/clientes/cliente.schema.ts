import { z } from 'zod/v4';

import { ativoFinanceiroResponseShema } from '../ativosFinanceiros/ativos.schema';

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
    status: statusEnum.default('ATIVO'),
    ativos: z.array(ativoFinanceiroResponseShema).nonempty(
        { message: "É necessário escolher ao menos 1 ativo financeiro" }
    )
});

export type CriarClienteSchemaInput = z.infer<typeof criarClienteSchema>;

export const clienteResponseSchema = z.object({
    id: z.uuid(),
    nome: z.string(),
    email: z.string().nonempty().refine(
        (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
    ),
    status: statusEnum,
    ativos: z.array(ativoFinanceiroResponseShema)
});