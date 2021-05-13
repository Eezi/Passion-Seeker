import { ApolloServer, gql } from 'apollo-server'
import PassionQueries from '../controllers/passionController.js'

const typeDefs = gql`
  type Passion {
    category: String
    label: String
    key: String
  }

  type Query {
    gamePassions: [Passion]
  }

`;

const resolvers = {
  Query: {
    gamePassions: PassionQueries.getAllGamePassions,
  },
};

export const server = new ApolloServer({ typeDefs, resolvers });



