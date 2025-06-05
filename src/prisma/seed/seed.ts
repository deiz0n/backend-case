import { prisma } from "../client";

async function main() {
    const cliente1 = await prisma.cliente.create({
        data: {
            nome: 'Ana Silva',
            email: 'ana.silva@exemplo.com'
        },
    });

    const cliente2 = await prisma.cliente.create({
        data: {
            nome: 'Carlos Oliveira',
            email: 'carlos@exemplo.com'
        },
    });

    const cliente3 = await prisma.cliente.create({
        data: {
            nome: 'Mariana Santos',
            email: 'mariana.santos@exemplo.com'
        },
    });

    const cliente4 = await prisma.cliente.create({
        data: {
            nome: 'Rafael Costa',
            email: 'rafael.costa@exemplo.com'
        },
    });

    const cliente5 = await prisma.cliente.create({
        data: {
            nome: 'Juliana Ferreira',
            email: 'juliana@exemplo.com'
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'Tesouro Selic 2026',
            valorAtual: 11542.75,
            clienteId: cliente1.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'Ações PETR4',
            valorAtual: 7890.50,
            clienteId: cliente1.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'FII HGLG11',
            valorAtual: 5230.40,
            clienteId: cliente2.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'CDB Banco XYZ',
            valorAtual: 15000.00,
            clienteId: cliente2.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'Ações VALE3',
            valorAtual: 9870.25,
            clienteId: cliente3.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'Tesouro IPCA+ 2035',
            valorAtual: 22450.80,
            clienteId: cliente3.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'Fundo de Investimento Multimercado',
            valorAtual: 18750.30,
            clienteId: cliente4.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'Ações ITUB4',
            valorAtual: 6540.20,
            clienteId: cliente4.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'LCI Banco ABC',
            valorAtual: 12000.00,
            clienteId: cliente5.id
        },
    });

    await prisma.ativoFinanceiro.create({
        data: {
            nome: 'Debêntures Empresa XYZ',
            valorAtual: 8500.60,
            clienteId: cliente5.id
        },
    });
}

main()
    .then(() => prisma.$disconnect())
    .catch(e => {
        console.error(e);
        prisma.$disconnect();
        process.exit(1);
    });