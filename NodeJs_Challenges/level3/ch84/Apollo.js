import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const schema = `#graphql
  type Query {
    hello: String
  }`;

const resolvers = {
  Query: {
    hello: () => "Hello",
  },
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(` server is running at ${url}`);
