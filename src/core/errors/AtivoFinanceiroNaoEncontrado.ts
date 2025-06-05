export class AtivoFinanceiroNaoEncontrado extends Error {
    public readonly data: Date;
    public readonly status: number;
    public readonly detalhes: string;

    constructor(detalhes: string) {
        super("Ativo financeiro não encontrado");
        this.name = "AtivoFinanceiroNaoEncontrado";
        this.data = new Date();
        this.status = 404;
        this.detalhes = detalhes;
    }
}