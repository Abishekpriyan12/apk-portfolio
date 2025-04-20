// src/graphql/client.js

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// Pick up from Vite’s env, or fall back to localhost for `npm run dev`
const GRAPHQL_URL =
  import.meta.env.VITE_GRAPHQL_URL || "http://localhost:4000/graphql";

const link = createHttpLink({
  uri: GRAPHQL_URL,
  credentials: "include",   // change to "same-origin" or remove if you don't need cookies
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
