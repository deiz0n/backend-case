import { prisma } from "../client";

async function main() {
    const cliente = await prisma.cliente.create({
        data: {
            nome: 'Cliente Exemplo',
            email: 'cliente@exemplo.com'
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'Ativo Livre',
            valorAtual: 1000.50,
            clienteId: cliente.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'Ativo do Cliente',
            valorAtual: 500.00,
            clienteId: cliente.id,
        },
    });
}

main()
    .then(() => prisma.$disconnect())
    .catch(e => {
        prisma.$disconnect();
        process.exit(1);
    });