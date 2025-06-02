import { z } from "zod";

export const responseSchemaErro = z.object({
    mensagem: z.string(),
    status: z.string(),
    data: z.string().datetime(),
    detalhes: z.string()
})

export const responseSchemaSucesso = z.object({
    mensagem: z.string(),
    status: z.string(),
    data: z.string().datetime(),
    dados: z.any().optional()
})