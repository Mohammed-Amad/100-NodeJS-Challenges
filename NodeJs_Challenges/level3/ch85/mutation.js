import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const schema = `#graphql
  type Query {
    hello: String
  }

  type Mutation {
    add(a: Int, b: Int): Int
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello",
  },
  Mutation: {
    add: (_parent, { a, b }) => a + b,
  },
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(` server is  running at ${url}`);