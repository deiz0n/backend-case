import { z } from 'zod';

export const criarAtivoFinanceiroSchema = z.object({
    nome: z.string().nonempty(
        { message: "Nome é obrigatório" }
    ),
    valorAtual: z.number().nonnegative(
        { message: "O valor do ativo precisa ser positivo" }
    )
})

export const ativoFinanceiroResponseShema = z.object({
    id: z.string().uuid(),
    nome: z.string().nonempty(
        { message: "Nome é obrigatório" }
    ),
    valorAtual: z.number().refine(
        (val) => !isNaN(val),
        { message: "Valor deve ser numérico" }
    )
});