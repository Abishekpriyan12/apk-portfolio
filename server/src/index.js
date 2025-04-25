// src/index.js
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


import typeDefs from './schema/typeDefs.js';
import resolvers from './resolvers/index.js';
import nodemailer from 'nodemailer';




// 1) Connect to MongoDB
ingoreDeprecation: true // remove this if not needed
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

async function startServer() {
  const app = express();

  // 2) CORS: allow both your deployed frontend and local dev URLs
  const FRONTEND_URL = process.env.FRONTEND_URL; // e.g. 'https://your-render-app.com'
  const CRA_URL      = 'http://localhost:3000';    // Create React App default
  const VITE_URL     = 'http://localhost:5173';    // Vite dev server default

  if (!FRONTEND_URL) {
    throw new Error('Missing FRONTEND_URL environment variable');
  }

  const allowedOrigins = [FRONTEND_URL, CRA_URL, VITE_URL];

  app.use(
    cors({
      origin: (origin, callback) => {
        // allow requests with no origin (mobile apps, curl, Postman, etc.)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
        callback(new Error(`CORS policy violation: ${origin} not allowed`));
      },
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

  // 4) Apply Apollo middleware without re-applying CORS
  server.applyMiddleware({ app, path: '/graphql', cors: false });

  // 5) Start HTTP server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(`🚀 GraphQL ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
}

startServer().catch(err => {
  console.error(err);
  process.exit(1);
});
