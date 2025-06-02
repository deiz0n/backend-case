export class ClienteNaoEncontradoError extends Error {
    public readonly data: Date;
    public readonly status: number;
    public readonly detalhes: string;

    constructor(detalhes: string) {
        super("Cliente não encontrado");
        this.name = "ClienteInvalidoError";
        this.data = new Date();
        this.status = 404;
        this.detalhes = detalhes;
    }
}