import { buildServer } from "./app";
import cors from "@fastify/cors";

async function start() {
  const server = await buildServer();
  await server.register(cors, { origin: true })
  await server.listen({ port: 3000, host: '0.0.0.0' });
}

start();