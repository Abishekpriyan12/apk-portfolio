// ===== src/schema/typeDefs.js =====
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Project {
    _id: ID!
    title: String!
    description: String
    imageUrl: String
    url: String
  }

  type Query {
    projects: [Project!]!
  }

  type Mutation {
    createProject(title: String!, description: String, imageUrl: String, url: String): Project!
  }
`;

export default typeDefs;
