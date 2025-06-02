export class AtivoFinanceiroInvalidoError extends Error {
    public readonly data: Date;
    public readonly status: number;
    public readonly detalhes: string;

    constructor(detalhes: string) {
        super("Erro ao criar ativo financeiro");
        this.name = "AtivoFinanceiroInvalidoError";
        this.data = new Date();
        this.status = 400;
        this.detalhes = detalhes;
    }
}