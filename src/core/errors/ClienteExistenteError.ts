export class ClienteExistenteError extends Error {
    public readonly data: Date;
    public readonly status: number;

    constructor(
        mensagem: string = "Cliente já cadastrado com este e-mail.",
        status: number = 409
    ) {
        super(mensagem);
        this.name = "ClienteExistenteError";
        this.data = new Date();
        this.status = status;
    }
}