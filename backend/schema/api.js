import { ApolloServer, gql } from 'apollo-server'
import PassionQueries from '../controllers/passionController.js'
import TestAnswerQueries from '../controllers/testAnswerController.js'
import TestAnswerTypes from './TestAnswers/types.js'
import PassionTypes from './Passions/types.js'

const typeDefs = gql`
  ${PassionTypes}
  ${TestAnswerTypes}

  type Query {
    passions(category: String): [Passion]
    getTestResults(answers: [AnswerInput]): [ResultPassion]
  }

`;

const resolvers = {
  Query: {
    passions: PassionQueries.getAllGamePassions,
    getTestResults: TestAnswerQueries.getTestResults,
  },
};

export const server = new ApolloServer({ typeDefs, resolvers });



