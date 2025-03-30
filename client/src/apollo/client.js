import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://your-api.com/graphql",  // ✅ Replace this with your endpoint
  cache: new InMemoryCache(),
});

export default client;