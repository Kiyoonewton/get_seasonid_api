import { ApolloServer } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
const getSeasonKey = require("./puppeteer");

const typeDefs = `#graphql
type Query {
    seasonId(id: Int): String
  }
`;

const resolvers = {
  Query: {
    seasonId: async (_: void, args: { id: number }) => {
      console.log(args.id);

      const seasonKey = await getSeasonKey(args?.id);
      return seasonKey;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
);
