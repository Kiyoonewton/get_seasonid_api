const getSeasonKey = require("./puppeteer");
const { ApolloServer, gql } = require('apollo-server-lambda');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const typeDefs = gql `
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
    //   context: ({ event, context }) => ({ event, context }),
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
exports.graphqlHandler = server.createHandler();
