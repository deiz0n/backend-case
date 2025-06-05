# Case Backend

## Pré-requisitos

- Node.js (recomendado: versão 18+)
- npm
- Docker

## Configuração

1. Clone o repositório:
   ```
   git clone https://github.com/deiz0n/backend-case.git
   cd backend-case
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Variáveis de ambiente necessárias:

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   DATABASE_URL=
   MYSQL_ROOT_PASSWORD=
   MYSQL_HOST=
   MYSQL_PASSWORD=
   MYSQL_DATABASE=
   ```

## Banco de Dados

- Certifique-se de que o MySQL está rodando e as credenciais do `.env` estão corretas.
- Para rodar as migrações e criar as tabelas:
  ```
  npm run prisma:migrate
  ```

- Para popular o banco com dados iniciais (seed):
  ```
  npm run seed
  ```

## Inicialização do Projeto

- Para rodar o projeto em modo desenvolvimento:
  ```
  npm start
  ```
  O servidor estará rodando na porta **3001**.

- Para compilar o TypeScript:
  ```
  npm run build
  ```

## Outros Comandos Úteis

- Abrir o Prisma Studio (interface visual do banco):
  ```
  npm run prisma:studio
  ```

- Gerar o client do Prisma:
  ```
  npm run prisma:generate
  ```

## Observações

- O projeto utiliza Fastify, Prisma e MySQL.
- O arquivo principal é `src/server.ts`.
- A API estará disponível em `http://localhost:3001`.