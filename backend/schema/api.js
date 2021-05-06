import { ApolloServer, gql } from 'apollo-server'
import PassionQueries from '../controllers/passionController.js'

const typeDefs = gql`
  type Passion {
    category: String
    label: String
    key: String
  }

  type Query {
    passions: Passion
  }

`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    passions: () => PassionQueries.getAllPassions,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});