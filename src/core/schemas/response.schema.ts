import { z } from "zod";

export const responseSchema = z.object({
    mensagem: z.string(),
    status: z.string(),
    data: z.string().datetime(),
    dados: z.any().optional()
})