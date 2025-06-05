import { buildServer } from "./app";
import cors from "@fastify/cors";

async function start() {
  const server = await buildServer();
  await server.register(cors, {
    origin: true ,
    methods: ['GET', 'POST', 'PATCH']
  });
  await server.listen({ port: 3001, host: '0.0.0.0' });
}

start();