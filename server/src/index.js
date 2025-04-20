// src/index.js
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import typeDefs from './schema/typeDefs.js';
import resolvers from './resolvers/index.js';

dotenv.config();

// 1) Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

async function startServer() {
  const app = express();

  // 2) Apply CORS *once*, allowing only your frontend origin
  //    Make sure you have set FRONTEND_URL in Render’s Env Vars.
  const FRONTEND_URL = process.env.FRONTEND_URL;
  if (!FRONTEND_URL) {
    throw new Error('Missing FRONTEND_URL environment variable');
  }

  app.use(
    cors({
      origin: FRONTEND_URL,
      credentials: true,
    })
  );

  // 3) Create & start Apollo
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
  });
  await server.start();

  // 4) Tell Apollo *not* to re‑apply CORS
  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: false,
  });

  // 5) Start your HTTP server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(`🚀 GraphQL ready at https://<your‑render‑url>${server.graphqlPath}`)
  );
}

startServer().catch(err => {
  console.error(err);
  process.exit(1);
});
