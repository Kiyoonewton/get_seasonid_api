const { ApolloServer } = require("@apollo/server");
const {
  startServerAndCreateLambdaHandler,
  handlers,
} = require("@as-integrations/aws-lambda");
const { getSeasonKey } = require("./puppeteer");

const typeDefs = `#graphql
type Query {
    seasonId(id: Int): String
  }
`;

const resolvers = {
  Query: {
    seasonId: async (_, args) => {
      const seasonKey = await getSeasonKey(args?.id);
      return seasonKey;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
);