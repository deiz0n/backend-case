import { buildServer } from "./app";

async function start() {
  const server = await buildServer();
  await server.listen({ port: 3000, host: '0.0.0.0' });
}

start();