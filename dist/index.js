const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const getSeasonKey = require("./puppeteer");
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
startStandaloneServer(server).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
