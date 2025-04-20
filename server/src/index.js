import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import typeDefs from './schema/typeDefs.js';
import resolvers from './resolvers/index.js';

dotenv.config();

// 1. Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const allowedOrigins = [
  process.env.FRONTEND_URL,
  /\.vercel\.app$/,
];

async function startServer() {
  // 2. Create Express app
  const app = express();
  app.use(cors({
    origin: true,
    credentials: true
  }));
 // If your front end is at a different domain, enable CORS

  // 3. Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // You can grab user auth tokens from headers if needed
      return { req };
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  // 4. Start listening
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
  });
}

startServer();
