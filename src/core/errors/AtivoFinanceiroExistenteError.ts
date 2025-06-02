export class AtivoFinanceiroExistenteError extends Error{
    public readonly data: Date;
    public readonly status: number;

    constructor(
        mensagem: string = "Ativo financeiro já cadastrado com nome.",
        status: number = 409
    ) {
        super(mensagem);
        this.name = "AtivoFinanceiroExistenteError";
        this.data = new Date();
        this.status = status;
    }
}