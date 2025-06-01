import { z } from 'zod/v4';

export const ativoFinanceiroResponseShema = z.object({
    nome: z.string().nonempty(
        { message: "Nome é obrigatório" }
    ),
    valorAtual: z.number().refine(
        (val) => typeof val === 'number' && !isNaN(val),
        { message: "Valor deve ser numérico" }
    )
});